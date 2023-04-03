
const {getProducts} = require("../index")
const {Order,Product,User} = require("../../db")
const {mailOrder}=require("../../controllers/mailsControllers/mail-Order")
//aca entraria la info del front¨[{idProducto: asd, amount:6},{idProducto: 231, amount:6}]



const validateOrder=async(newOrdercreated)=>{
    try{ 
  const idOrdenEntrante=[]
    const infoProducts= await getProducts ()
    //console.log(infoProducts[0].dataValues,"acaaaaaaaaaaaaaaaaaaaaaaaaa")
    //console.log(infoProducts)
    const dataFront=newOrdercreated
        for (let prod of dataFront){
            idOrdenEntrante.push(prod?.id)
        }
    
    
    const newBuys=[]
    let searchId;
    let i=0
    let validate= true
    
    while(i < idOrdenEntrante.length && validate){
        searchId= infoProducts.find(el=>el.dataValues.id=== idOrdenEntrante[i])
        
        if(searchId.dataValues.availability>=dataFront[i].quantity){
          Product.update({availability: {S: dataValues.availability.S - dataFront[i].quantity}}, {where: {sku: idOrdenEntrante[i]}});
       
        }else{
            validate=false
            return `One of the products is out of stock: ${idOrdenEntrante[i]}`
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
    //console.log(productsFront,"esto es productsFront productsFront")
    //console.log(userBuy,"esto es userBuy userBuy")
    let userByOrder = await User.findByPk(userBuy[0].userId);
    let totalPrice = 0;
    for (let i = 0; i < productsFront.length; i++) {
      totalPrice =
      totalPrice + productsFront[i].unit_price * productsFront[i].quantity;
    }
    
     // validateOrder(productsFront)
      const newOrdercreated = await Order.create({
        paymentMethod: "mercadoPago",
        status: "aceptada",
        totalMount: totalPrice,
        products: productsFront,
        notification: false,

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
