const {filterOrderState}= require("../../controllers/Orders/filterOrderState")



const filterOrderSattusHandler=async(req,res)=>{

    try {
        const {status}=req.params

        const orderStatus= await filterOrderState(status)
        res.status(200).json(orderStatus)

    } catch (error) {
        res.status(400).json({error:error.message})
    }

}

module.exports={
    filterOrderSattusHandler
}