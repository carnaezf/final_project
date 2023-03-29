
const {putOrderSatate}= require("../../controllers/Orders/putOrderState")



const putOrderHandler=async(req, res)=>{
try {
    const {idOrder,status}= req.body
    const orderModifi= await putOrderSatate(idOrder,status)
    res.status(200).json(orderModifi)
} catch (error) {
    res.status(400).json({error:error.message})
}
}




module.exports={
    putOrderHandler
}