const { Product } = require("../db");
const {getProducts} =require("./index")

const filterByStock = async (stock) => {
const productStock =await getProducts()
const filterStock=productStock.filter(el=>el.dataValues.availability.toLowerCase().includes(stock.toLowerCase()))

return filterStock
}

module.exports = {
    filterByStock
  };
  