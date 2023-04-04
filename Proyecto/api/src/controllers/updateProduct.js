const { Product } = require("../db");

const updateProduct = async (id, body) => {
  const product = await Product.findByPk(id);
  if (!product) {
    throw new Error(`product id not found ${id}`);
  }
  await product.set(body); //lo actualiza
  await product.save(); //lo guarda
  return product;
};

module.exports = {
  updateProduct,
};
