const {validateOrderCreated}= require("../../controllers/Orders/newOrderController")
// const datFront=[{currency_id:"ARS",description: "description ",id:  "bf333f36-196b-4c00-9101-a9d661523140",picture_url: "https://assets.adidas.com/images/w_600,f_auto,q_auto/2b04943c525e4909a7a5a9fa0116153d_9366/Five_Ten_Kestrel_Lace_Mountain_Bike_Shoes_Grey_BC0770_01_standard.jpg",quantity:4,title:"Five Ten Kestrel Lace Mountain Bike Shoes",unit_price: 150},{ currency_id: "ARS",description: "description ",id:"54edb579-8bb9-4f2d-ba48-e1210b52ea0d",picture_url:"https://assets.adidas.com/images/w_600,f_auto,q_auto/4b12d5462aec410faee9ab1000feb34f_9366/Mexico_Away_Jersey_White_GC7946_01_laydown.jpg",quantity :3,title:"Mexico Away Jersey", unit_price : 70},{ idUser :  "d219dbb0-89c3-4792-a89a-72401c6549a7",lastNameUser : "Maturano",nameUser : "Rocio"}]
// const { mailOrder } = require('../../controllers/mailsControllers/mail-Order')

const newOrderHandler= async(req,res)=>{
    
    try {
        const newOrder =  []= req.body

        //console.log(newOrder,"datos que recibe el fronttttt newOrder")
       const newOrdercreated= await validateOrderCreated(newOrder)
      
   
    //    await mailOrder(newOrdercreated)
      // if(newOrdercreated.length===0) return res.status(200).send('The order is empty')
       res.status(200).json(newOrdercreated);
    } catch (error) {
        res.status(400).json({error:error.message})
    }

}

module.exports={
    newOrderHandler
}

