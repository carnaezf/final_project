const {filterByReviews}= require("../../controllers/Filters/filterByReviews")

const filterByReviewsHandler= async(req, res)=>{
    const {reviewMin,reviewMax} = req.query;
  
try {
    const productByReview=await filterByReviews(reviewMin,reviewMax)
    if(productByReview.length===0) return res.status(200).send("There are no products whit that review.Remember 1st min review, 2nd max review ")
    res.status(200).json(productByReview)
} catch (error) {
    res.status(400).json({error:error.message})
}

}




module.exports = {
    filterByReviewsHandler
}