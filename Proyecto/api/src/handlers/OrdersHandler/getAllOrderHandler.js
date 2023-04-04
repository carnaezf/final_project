const {getAllOrders}= require ("../../controllers/Orders/getAllOrders")


const getAllOrdersHandler= async(req,res)=>{

    try {
        const getOrders= await getAllOrders()
        res.status(200).json(getOrders)
    } catch (error) {
        res.status(400).json({error:error.message})
    }


}


module.exports={
    getAllOrdersHandler,
}