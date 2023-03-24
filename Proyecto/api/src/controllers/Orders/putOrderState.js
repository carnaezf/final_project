const {Order}= require("../../db")
const {getOrderrById}=require("../../controllers/Orders/getOrderById")


const putOrderSatate =async(idOrder,status)=>{
try {
    const orders= await getOrderrById(idOrder)
console.log(orders)
    const ordermodifi= await orders.update({status:status})

    return ordermodifi

} catch (error) {
    return ({error:error.message})
}
}



module.exports={
    putOrderSatate
}