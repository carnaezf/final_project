const {Order}=require("../../db")


const filterOrderState=async(status)=>{
try {
    const statusF=status.toLowerCase()
    const ordersForStatus= await Order.findAll({
        where:{
            status:statusF
        }
    })
    //console.log(ordersForStatus)

    return ordersForStatus

} catch (error) {
    return "erorr whit filterOrderState"
}


}

module.exports={
    filterOrderState,
}