<<<<<<< HEAD:Proyecto/api/src/controllers/Filters/filterByStock.js
const { Product } = require("../../db");
const {getProducts} =require("../index")
=======
const { Product } = require("../db");
const { getProducts } = require("./");
>>>>>>> f5de071f650ea1a9ed6b91d3b369a8115b04a145:Proyecto/api/src/controllers/filterByStock.js

const filterByStock = async () => {
const productStock =await getProducts()
const filterStock=productStock.filter(el=>Number(el.dataValues.availability) > 0)


  return filterStock;
};

module.exports = {
  filterByStock,
};
