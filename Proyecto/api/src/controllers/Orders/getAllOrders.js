const {Order}= require ("../../db")


const getAllOrders=async()=>{
try {
    const getOrders= await Order.findAll()
    return getOrders
    
} catch (error) {
    return ({error:error.message})
}



}

module.exports={
    getAllOrders,
}