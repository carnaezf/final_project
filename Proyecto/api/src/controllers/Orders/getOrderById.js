const { Order}= require("../../db")

const getOrderrById= async (idOrder)=>{
try {
    //console.log(idOrder)
    const allOrders= await Order.findOne({
        where:{idOrder:idOrder
        }
    })
   return allOrders
} catch (error) {
    return ({error:error.message})
}

}


module.exports={
    getOrderrById,
}