const { Product } = require("../db");
const { Comment } = require("../db");
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
    availability: object?.availability.toLowerCase(),
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
  const product = await Product.findByPk(id)
  await product.update(
    {
      average_rating: (product.average_rating * product.reviews_count + Number(reviewValue)) / (product.reviews_count + 1),
      reviews_count: product.reviews_count + 1,
    })
}

const addComment = async ({ comment, userId, id, }) => {
  const newComment = await Comment.create({comment})
  await newComment.setUser(userId)
  await newComment.setProduct(id)
}



//..........................................
const getProductById = async (id) => {
  try {
    const products = await Product.findOne({
      where: { id: id },
    });

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
  images,
  average_rating,
  id,
  category,
  reviews_count
) => {
  const product = await Product.create({
    name,
    description,
    sellingPrice,
    images,
    average_rating,
    id,
    category,
    reviews_count,
  });
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

};
