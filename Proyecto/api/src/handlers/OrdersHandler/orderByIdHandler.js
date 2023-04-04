const {getOrderrById}= require("../../controllers/Orders/getOrderById")


const orderByIdHandler=async(req,res)=>{
    try {
        const {idOrder}= req.params
        const orderById= await getOrderrById(idOrder)
        if(orderById.length===0) res.status(200).send("the lista is empty")
        res.status(200).json(orderById)
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}

module.exports={
    orderByIdHandler,
}