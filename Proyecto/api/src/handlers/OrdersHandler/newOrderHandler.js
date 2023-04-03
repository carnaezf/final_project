
const {validateOrderCreated}= require("../../controllers/Orders/newOrderController")
const newOrderHandler=async()=>{  
    try {
        const newOrder = ([] = req.body);
       const newOrdercreated= await validateOrderCreated(newOrder)
       res.status(200).json(newOrdercreated);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
module.exports = {
  newOrderHandler,
};
