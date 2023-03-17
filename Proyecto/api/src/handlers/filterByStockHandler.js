const {filterByStock}= require("../controllers/filterByStock")

const filterByStockHandler =async (req, res)=>{
    const { stock } = req.params;
        const stockFinally= stock.toLowerCase()
    try {
        const productsStock= await filterByStock(stockFinally)
       if(productsStock.length===0)return res.status(200).json('There are no products ')
        res.status(200).json(productsStock);
    } catch (error) {
        res.status(404).json({error:error.message});
    }
}

module.exports = {
 filterByStockHandler
};
