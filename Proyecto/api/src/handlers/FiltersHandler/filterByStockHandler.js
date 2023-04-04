const {filterByStock}= require("../../controllers/Filters/filterByStock")

const filterByStockHandler =async (req, res)=>{
    try {
        const productsStock= await filterByStock()
        
        res.status(200).json(productsStock);
    } catch (error) {
        res.status(404).json({error:error.message});
    }
}

module.exports = {
 filterByStockHandler
};
