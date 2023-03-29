const {Order}= require ("../../db")


const getAllOrders=async()=>{
try {
    const getOrders= await Order.findAll()
    if(getOrders.length===0) "The order list is empty"
    else{
        return getOrders
    }
} catch (error) {
    return ({error:error.message})
}



}

module.exports={
    getAllOrders,
}