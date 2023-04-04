const {mailsTotality}= require("../../controllers/mailsControllers/filterMail")


const mailsTotalityHandler=async(req,res)=>{
try {
    const mailsTot= await mailsTotality()
    if(mailsTot.length===0)return "vacio"
    res.status(200).json(mailsTot)
} catch (error) {
    res.status(400).json({error:error.message})
}




}


module.exports={
    mailsTotalityHandler
}