const { Product } = require("../db");
const obj = require("../../Data.js");
const { Op } = require("sequelize");

const obj2 = obj.map((object) => {

  return {
    name: object.name,
    description: object.description.slice(0, 12),
    sellingPrice: object.selling_price,
    images: object.images.split("~"),
    average_rating: object.average_rating,
    sku: object.sku,
    category: object.category.toLowerCase(),
    reviews_count: object?.reviews_count,
  };
});

const getProducts = async () => {
  const products = await Product.findAll();
  // console.log(products);
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
        category: category
      }
    })
    return products
}

const addReview = async ({ sku, reviewValue }) => {
  const product = await Product.findByPk(sku)
  await product.update(
    {
      average_rating: (product.average_rating * product.reviews_count + Number(reviewValue)) / (product.reviews_count + 1),
      reviews_count: product.reviews_count + 1,
    })
}


//..........................................
const getProductById = async (id) => {
  try {
      const products = await Product.findOne({
        where: { sku: id },
      });
   
     const detail = products.dataValues;
 
     return detail;
     
    } catch (error) {
      return "Id not found";
    }
  };
  
module.exports = {
  getProducts,
  getSearch,
  getProductById,
  getByCategory,
  addReview
};
