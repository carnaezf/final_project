const {filterByRating}= require("../../controllers/Filters/filterByRating")

const filterByRatingHandler= async(req, res)=>{
    const {ratingMin,ratingMax} = req.query;
    console.log(ratingMin)
    console.log(ratingMax)
    //const ratingNumberMin= (ratingMin)
    //const ratingNumebrMax = Number(ratingMax)
try {
    const productByRating=await filterByRating(ratingMin,ratingMax)
    if(productByRating.length===0) return res.status(200).send("There are no products whit rating.Remember 1st min rating, 2nd max rating ")
    res.status(200).json(productByRating)
} catch (error) {
    res.status(400).json({error:error.message})
}

}




module.exports = {
    filterByRatingHandler
}