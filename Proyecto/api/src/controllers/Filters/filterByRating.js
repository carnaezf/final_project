const { Product } = require("../../db");

const filterByRating = async (ratingMin,ratingMax)=>{

    const productRating  =await Product.findAll()
    const filter=productRating.filter (product=>{
        return Math.floor(product.average_rating) >= ratingMin && Math.floor(product.average_rating) <= ratingMax
    })

return filter
}


module.exports = {
   
    filterByRating
  };