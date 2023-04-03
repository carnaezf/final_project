const { mailOrder } = require('../mailsControllers/mail-Order')
const {getProducts} = require("../index")
const {Order,Product,User} = require("../../db")
//aca entraria la info del front¨[{idProducto: asd, amount:6},{idProducto: 231, amount:6}]



const validateOrder=async()=>{
    try{ 
    const idOrdenEntrante=[]
    const infoProducts= await getProducts ()
    //console.log(infoProducts[0].dataValues,"acaaaaaaaaaaaaaaaaaaaaaaaaa")
    //console.log(infoProducts)
    const dataFront=[{id:13,quantity:1 },{id:29,quantity:1 },{id:33,quantity:1 },{id:62,quantity:2 } ]
    if(dataFront){
        for (let prod of dataFront){
            idOrdenEntrante.push(prod?.id)
        }
    } 
    //console.log(idOrdenEntrante)//[ 13, 29, 33, 62 ]
    const newBuys=[]
    let searchId;
    let i=0
    let validate= true
    let totalPrice=0
    while(i < idOrdenEntrante.length && validate){
        searchId= infoProducts.find(el=>el.dataValues.id=== idOrdenEntrante[i])
        //console.log(searchId, "iteracion " ,i)
        
        if(searchId.dataValues.availability>=dataFront[i].quantity){
            totalPrice= totalPrice+(searchId.dataValues.sellingPrice  * dataFront[i].quantity)
            newBuys.push(searchId)
        }else{
            validate=false
            
        }

        i++
    }
   // console.log(totalPrice)
    return totalPrice
}catch(error){
return  "there is not enough stock of some products"
}
    //console.log(totalPrice,"aca esta total precio")
    //console.log(newBuys,"aca esta compra")
   
}

const validateOrderCreated = async (newOrder) => {
  try {
   
    let userBuy = [];
    let productsFront = [];
    for(let i=0;i<newOrder.length;i++){
      newOrder[newOrder.length-1].userId?userBuy.push(newOrder[newOrder.length-1]):""
          newOrder[i].id?productsFront.push(newOrder[i]):""
        }
        // console.log(productsFront,"esto es productsFront productsFront")
        // console.log(userBuy,"esto es userBuy userBuy")
        let userByOrder = await User.findByPk(userBuy[0].userId);
        let totalPrice = 0;
        for (let i = 0; i < productsFront.length; i++) {
          totalPrice =
          totalPrice + productsFront[i].unit_price * productsFront[i].quantity;
        }
        
        // console.log(productsFront,"esto es product front")
        // console.log(totalPrice)
        const newOrdercreated = await Order.create({
          paymentMethod: "mercadoPago",
          status: "aceptada",
        totalMount: totalPrice,
        products: productsFront,
        notification: false
      });
  
  // console.log("NEWORDERCREATED", newOrdercreated);

      for (let i = 0; i < productsFront.length; i++) {
        const product = await Product.findByPk(productsFront[i].id);
        await newOrdercreated.addProduct(product, {
          through: { quantity: productsFront[i].quantity },
        });
      }
      await userByOrder.addOrder(newOrdercreated, { through: { UserUserId: userByOrder.id } });
      
      await mailOrder(newOrdercreated, newOrder);
      
      return newOrdercreated;
    } catch (error) {
      return { error: error.message };
    }
  };

module.exports = {
    validateOrderCreated,
    
};
{/*
const validateOrderCreated=async(newOrder)=>{
   // let totalPrice= await validateOrder(product,quantity)
    try {
       
        //console.log(newOrder,"esto es new order desde controller")
        let userBuy=[]
        let productsFront=[]
        for(let i=0;i<newOrder.length;i++){
            newOrder[newOrder.length-1].userId?userBuy.push(newOrder[newOrder.length-1]):""
            newOrder[i].title?productsFront.push(newOrder[i]):""
        }
        //console.log(productsFront,"esto es products front ")
        //NO TOCAR USER ESTA OK
        let userByOrder= await User.findByPk(userBuy[0].userId)
        let totalPrice=0
        for(let i=0;i<productsFront.length;i++){
            totalPrice=totalPrice+(productsFront[i].unit_price*productsFront[i].quantity)
        }
        
        const newOrdercreated= await Order.create({paymentMethod:"mercadoPago",status:"aceptada",totalMount:totalPrice,products:[productsFront]})

        console.log(newOrdercreated,"eto es la orden creada")
     
        userByOrder.addOrder(newOrdercreated)
      
        return newOrdercreated
} catch (error) {
    return ({error:error.message})
   }
   
}
*/}
