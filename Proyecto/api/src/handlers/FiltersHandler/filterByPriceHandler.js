const {filterByRangePrice} =require("../../controllers/Filters/filterByPrice")




const filterByPriceHandler= async (req, res)=>{

    const {sellingPriceMin,sellingPriceMax} = req.query;
    const priceNumberMin= Number(sellingPriceMin)
    const priceNumebrMax = Number(sellingPriceMax)

    try {
        const productPrice = await filterByRangePrice(priceNumberMin,priceNumebrMax)
        if(productPrice.length === 0) return res.status(200).send("There are no products whit that price.Remember 1st min price, 2nd max price ")
        res.status(200).json(productPrice);
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }


}

module.exports = {
    filterByPriceHandler
}