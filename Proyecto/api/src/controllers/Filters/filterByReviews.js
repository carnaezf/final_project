const { Product } = require("../../db");

const filterByReviews = async (reviewMin,reviewMax)=>{

    const productReview  =await Product.findAll()
    const filter=productReview.filter (product=>{
        return Math.floor(product.reviews_count) >= reviewMin && Math.floor(product.reviews_count) <= reviewMax
    })
    
return filter
}


module.exports = {
   
    filterByReviews
  };