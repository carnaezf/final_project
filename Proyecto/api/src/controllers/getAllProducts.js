const { data } = require("../data/data")
// console.log(data);

const obj2 = data.map(object => {
  return {
    sku: object.sku,
    name: object.name,
    sellingPrice: object.selling_price,
    category: object.category,
    description: object.description.slice(0, 12),
    average_rating: object.average_rating,
    average_count: object.average_count
  }
})
const getAllProducts = async () => {
     await Product.bulkCreate(obj2)
  }


  module.exports = {
    getAllProducts
  }