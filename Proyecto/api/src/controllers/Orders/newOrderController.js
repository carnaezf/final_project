
const {getProducts} = require("../index")
const {Order,Product,User} = require("../../db")
const {mailOrder}=require("../../controllers/mailsControllers/mail-Order")
//aca entraria la info del front¨[{idProducto: asd, amount:6},{idProducto: 231, amount:6}]



const validateOrder = async (newOrder) => {
  //newOrder
  //console.log(newOrder, "esta es la orden que ingresa del front ");
  try {
    const idOrdenEntrante = [];
    const infoProducts = await getProducts();
    let validate = true;
    let cont = 0;
    let i =0
    for (let prod of newOrder) {
      prod.id !== undefined?idOrdenEntrante.push(prod?.id ): ""
    }
    //console.log(idOrdenEntrante,"esto son los ids del front")
    searchId = infoProducts.find(
      (el) => el.dataValues.id === idOrdenEntrante[i]
    );
    
    
    

    while (i < idOrdenEntrante.length && cont===0) {
      searchId = infoProducts.find(
        (el) => el.dataValues.id === idOrdenEntrante[i]
      );
      if (newOrder[i].size === 'L') {
        cont = cont + 1;
        if (searchId.dataValues.availability[2].L >= newOrder[i].quantity) {
          cont = cont - 1;
        }
      }
      if (newOrder[i].size === 'M') {
        cont = cont + 1;
        if (searchId.dataValues.availability[1].M >= newOrder[i].quantity) {
          cont = cont - 1;
        }
      }
      if (newOrder[i].size === 'S') {
        cont = cont + 1;
        if (searchId.dataValues.availability[0].S >= newOrder[i].quantity) {
          cont = cont - 1;
        }
      }
      i++;
    }
    if (cont === 0) {
      let j = 0;
      for (let i = 0; i < idOrdenEntrante.length; i++) {
        let productcreated = await Product.findOne({
          where: { id: idOrdenEntrante[i] },
        });
        let AuxAvailability= productcreated.dataValues.availability
        
        if (newOrder[j].size === "L") {
          AuxAvailability[2].L -= newOrder[j].quantity;
        } else if (newOrder[j].size === "M") {
          AuxAvailability[1].M -= newOrder[j].quantity;
        } else if (newOrder[j].size === "S") {
          AuxAvailability[0].S -= newOrder[j].quantity;
        }
        
        await productcreated.update({availability:[ AuxAvailability  ]});
       
        j++;
      }
      validateOrderCreated(newOrder);
    } else {
  
      return "Stock insuficiente en la base de datos";
    }

    return "Orden completa y creada con exito" ;
  } catch (error) {
    return ({ error: error.message });
  }

};




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
  validateOrder,
    
};
