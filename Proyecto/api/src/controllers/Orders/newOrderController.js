const { mailOrder } = require("../mailsControllers/mail-Order");
const { getProducts } = require("../index");
const { Order, Product, User } = require("../../db");
//aca entraria la info del front¨[{idProducto: asd, amount:6},{idProducto: 231, amount:6}]

const validateOrder = async () => {
  try {
    const idOrdenEntrante = [];
    const infoProducts = await getProducts();
    //console.log(infoProducts[0].dataValues,"acaaaaaaaaaaaaaaaaaaaaaaaaa")
    //console.log(infoProducts)
    const dataFront = [
      { id: 13, quantity: 1 },
      { id: 29, quantity: 1 },
      { id: 33, quantity: 1 },
      { id: 62, quantity: 2 },
    ];
    if (dataFront) {
      for (let prod of dataFront) {
        idOrdenEntrante.push(prod?.id);
      }
    }
    //console.log(idOrdenEntrante)//[ 13, 29, 33, 62 ]
    const newBuys = [];
    let searchId;
    let i = 0;
    let validate = true;
    let totalPrice = 0;
    while (i < idOrdenEntrante.length && validate) {
      searchId = infoProducts.find(
        (el) => el.dataValues.id === idOrdenEntrante[i]
      );
      //console.log(searchId, "iteracion " ,i)

      if (searchId.dataValues.availability >= dataFront[i].quantity) {
        totalPrice =
          totalPrice + searchId.dataValues.sellingPrice * dataFront[i].quantity;
        newBuys.push(searchId);
      } else {
        validate = false;
      }

      i++;
    }
    // console.log(totalPrice)
    return totalPrice;
  } catch (error) {
    return "there is not enough stock of some products";
  }
  //console.log(totalPrice,"aca esta total precio")
  //console.log(newBuys,"aca esta compra")
};
//aca entra el metodo de pago

// async(product,amount,paymentMethod)
const validateOrderCreated = async (
  product,
  quantity,
  paymentMethod,
  userId
) => {
  // aca iria la validacion ok del pago
  let totalPrice = await validateOrder();
  //console.log(totalPrice,"----------------------------------------")
  //    let numberPrice=Number(totalPrice)
  try {
    if (totalPrice) {
      const dataFront = [
        {
          Products: {
            id: 13,
            quantity: 1,
            id: 29,
            quantity: 1,
            id: 33,
            quantity: 1,
            id: 62,
            quantity: 2,
          },
          User: {
            idUser: "655f9235-2f7a-4240-9e78-75a238f87618",
            name: "German",
            lastName: "Maturano",
          },
        },
      ];
      //console.log(dataFront[0].User.idUser)
      //let userByOrder= await User.findAll({where:{userId: dataFront[0].User.idUser}})
      let userByOrder = await User.findByPk(dataFront[0].User.idUser);
      //console.log("..............",userByOrder)
      const newOrdercreated = await Order.create({
        product,
        quantity,
        status: "aceptada",
        paymentMethod,
        totalMount: totalPrice,
        UserUserId: userByOrder.dataValues.userId,
        date: "25/03/2023",
        notification: false
      });
      userByOrder.set(newOrdercreated).save();
      //newOrdercreated.save()
      console.log(newOrdercreated);
      //    mailOrder()
      return newOrdercreated;
    } else {
      return "error en crear la orden";
    }
  } catch (error) {
    return error.message;
  }
};

//console.log(validateOrder())

module.exports = {
  validateOrderCreated,
};
