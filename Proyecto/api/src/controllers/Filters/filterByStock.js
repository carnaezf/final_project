const { Product } = require("../../db");
const {getProducts} =require("../index")

const filterByStock = async () => {
const productStock =await getProducts()
const filterStock=productStock.filter(el=>Number(el.dataValues.availability) > 0)

return filterStock
}

module.exports = {
    filterByStock
  };
  