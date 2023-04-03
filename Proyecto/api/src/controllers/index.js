const { Product } = require("../db");
const { Comment } = require("../db");
const { User } = require("../db");
const obj = require("../../Data.js");
const { Op } = require("sequelize");

const obj2 = obj.map((object) => {
  return {
    name: object.name,
    description: object.description.slice(0, 12),
    sellingPrice: object.selling_price,
    images: object.images.split("~"),
    average_rating: object.average_rating,
    category: object.category.toLowerCase(),
    reviews_count: object?.reviews_count,
    breadcrumbs: object?.breadcrumbs.toLowerCase(),
    availability: object?.availability,
    description: object?.description,
  };
});

const getProducts = async () => {
  const products = await Product.findAll();

  if (products.length === 0) {
    const productDb = await Product.bulkCreate(obj2);
    return productDb;
  }
  return products;
};

const getSearch = async (name) => {
  try {
    const products = await Product.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    return products;
  } catch (error) {
    return "Clothes not found";
  }
};

const getByCategory = async (category) => {
  const products = await Product.findAll({
    where: {
      category: category,
    },
  });
  return products;
};

const addReview = async ({ id, reviewValue }) => {
  const product = await Product.findByPk(id);
  await product.update({
    average_rating:
      (product.average_rating * product.reviews_count + Number(reviewValue)) /
      (product.reviews_count + 1),
    reviews_count: product.reviews_count + 1,
  });
};

const addComment = async ({ comment, userId, id }) => {
  console.log(comment, userId, id);
  //nos asegurammos que los datos no esten vacios
  if (comment && userId && id) {
    try {
      // lo creamos
      const nComment = await Comment.create({
        comments: comment,
      });
      // lo asociamos
      const user = await User.findOne({
        where: {
          userId: userId,
        },
      });
      //esto agrega el comentario al usuario
      await user?.addComment(nComment);

      //esto agrega el comentario al producto
      const product = await Product.findOne({
        where: {
          id: id,
        },
      });

      await product?.addComment(nComment);
    } catch (error) {
      console.log(error);
    }
  }
};

//..........................................
const getProductById = async (id) => {
  try {
    console.log(id, "id");
    // buscamos el producto y que incluya el modelo de los comentarios
    const products = await Product.findOne({
      where: { id: id },
      include: [
        {
          model: Comment,
        },
      ],
    });
    // buscamos los usuarios que hicieron comentarios (nos devuelve un array de id de usuarios)
    const users = products.dataValues.Comments.map(
      (e) => e.dataValues.UserUserId
    );
    //buscamos al usuario que hizo el comentario
    for (const user of users) {
      const userOrder = await User.findOne({
        where: {
          userId: user,
        },
      });
      // buscamos que coincida el id del usuario y a dataValues en la parte de
      //comentarios le agregamos el nombre y apellido
      products.dataValues.Comments.map((e) => {
        if (e.dataValues.UserUserId === user) {
          e.dataValues.user = `${userOrder.name} ${userOrder.lastName}`;
        }
      });
    }

    const detail = products.dataValues;

    return detail;
  } catch (error) {
    return "Id not found";
  }
};

const createProduct = async (
  name,
  description,
  sellingPrice,
  urlImage,
  average_rating,
  category,
  reviews_count,
  totalAvailability,
  availability
) => {
  const product = await Product.create({
    name,
    description,
    sellingPrice,
    images: urlImage,
    average_rating,
    category,
    reviews_count,
    availability,
    totalAvailability,
  });
  return product;
};
const ProductBanned = async (id) => {
  const product = await Product.findByPk(id);
  if (!product) {
    throw new Error(`user id not found ${id}`);
  }
  if (product.show === true) {
    await product.set({ show: false });
    await product.save();
    return product;
  }
  product.set({ show: true });
  await product.save();
  return product;
};

module.exports = {
  getProducts,
  getSearch,
  getProductById,
  getByCategory,
  addReview,
  addComment,
  createProduct,
  ProductBanned,
};
