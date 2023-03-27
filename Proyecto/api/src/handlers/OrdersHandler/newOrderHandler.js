const {validateOrderCreated}= require("../../controllers/Orders/newOrderController")


const newOrderHandler= async(req,res)=>{
    const {product,quantity,paymentMethod,userId}= req.body
    try {
       const newOrdercreated= await validateOrderCreated(product,quantity,paymentMethod,userId)
      // if(newOrdercreated.length===0) return res.status(200).send('The order is empty')
       res.status(200).json(newOrdercreated);
    } catch (error) {
        res.status(400).json({error:error.message})
    }

}

module.exports={
    newOrderHandler
}