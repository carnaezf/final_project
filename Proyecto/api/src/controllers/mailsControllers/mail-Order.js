// const nodemailer = require("nodemailer");
const nodeoutlook = require("nodejs-nodemailer-outlook");
const { EMAIL_USERNAME, EMAIL_PASSWORD } = process.env;
const { Order, Product, User } = require("../../db");

const mailOrder = async () => {

    const findOrder = await Order.findAll({
            where:{ 
               notification: false,
            },
            include: [ User ],
    });
 
  let title, img;
  
findOrder.forEach(async(order) => {

  if (order.status.tolowerCase() === "rechazada") {
    title = "We're sorry, we were unable to process your order",
    img ="https://res.cloudinary.com/dtf2uzukd/image/upload/q_auto/v1680279173/l5gma9mcfyscse4ndn1b.webp";
  
  } else if (order.status.tolowerCase() === "aceptada") {
    title = "Your order has been accepted",
    img ="https://res.cloudinary.com/dtf2uzukd/image/upload/q_auto/v1680280275/bzz9osazvrbgz41qh1ox.webp";
  }
  //order de compra
  // img ='https://res.cloudinary.com/dtf2uzukd/image/upload/q_auto/v1680279390/skbf16gfx3at5vbh2ex8.webp'
  // img = 'https://res.cloudinary.com/dtf2uzukd/image/upload/v1680279390/skbf16gfx3at5vbh2ex8.png'

  try {
    let infoSend = nodeoutlook.sendEmail({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: EMAIL_USERNAME,
        pass: EMAIL_PASSWORD,
      },

      from: '"Haal" <notificaciones.sports@outlook.es>',
      to: User.email, //ARRAY user.email
      subject:`¡Thanks for your purchase ${User.name} ${User.lastName}!`,
      text:`Your order id: ${order.idOrder}`,
      html:`<div style="color:grey; text-align:center"
      <div>
          <img src=${img} alt='Imagen encabezado compra aceptada'/>
      </div>
      <h1 style='color:white'>${title}</h1>
      <img style='background-color:purple' src='https://res.cloudinary.com/dtf2uzukd/image/upload/q_auto/v1680279390/skbf16gfx3at5vbh2ex8.webp' alt='imagen adidas'/>
      <h2 style='color:white'>Your Order:</h2>
      <table  style='text-align:left: padding:10px;min-width:80%'>
          <tr>
              <th style='text-align:left'>Product</th><th>Quantity</th><th>Total Mount</th>
          </tr>
          ${order.products.map((product) => {
              return `<tr>
                      <td style='text-align:left'>${product.id}</td>
                      <td style='text-align:right'>${product.quantity}</td>
                      <td style='text-align:right'>${product.unit_price}</td>
                      <td style='text-align:right'>${product.description}</td>
                      <td style='text-align:right'>${product.picture_url}</td>
                  </tr>`;
            }).join(" ")}
          <tr>
              <td>-</td>
              <td>-</td>
              <td>Total:</td>
              <td>${order.totalMount}</td>
          </tr>
      </table>
      <p style='padding:10px;margin:10px;text-align:center;border-top:1px solid white'>
      <strong>Status: </strong>${order.status}
  </div>`,

      onError: (e) => console.log(e),
      onSuccess: (i) => console.log("Order mail sent", i),
    });
      
   findOrder.notification = true;
   await findOrder.save();
      
  } catch (error) {
    console.log(error);
  }})
};

module.exports = {
  mailOrder,
};

/*const nodeoutlook = require('nodejs-nodemailer-outlook')
const { EMAIL_USERNAME, EMAIL_PASSWORD } = process.env;

const mailOrder = async (req, res) => {

    const {
        name, 
        lastName, 
        email, 
        product, 
        quantity, 
        totalMount, 
        status } = req.body;

        let title, img;

        if (status.tolowerCase() === "rechazada"){
            title = "We're sorry, we were unable to process your order",
            // img ='https://res.cloudinary.com/dtf2uzukd/image/upload/v1680277120/l5gma9mcfyscse4ndn1b.png'
            img= 'https://res.cloudinary.com/dtf2uzukd/image/upload/q_auto/v1680279173/l5gma9mcfyscse4ndn1b.webp'
        } else if (status.tolowerCase() === "aceptada"){
            title = "Your order has been accepted",
            img = 'https://res.cloudinary.com/dtf2uzukd/image/upload/q_auto/v1680280275/bzz9osazvrbgz41qh1ox.webp'
            //img = 'https://res.cloudinary.com/dtf2uzukd/image/upload/v1680280275/bzz9osazvrbgz41qh1ox.png'
        } 
        //order de compra
        // img ='https://res.cloudinary.com/dtf2uzukd/image/upload/q_auto/v1680279390/skbf16gfx3at5vbh2ex8.webp'
        // img = 'https://res.cloudinary.com/dtf2uzukd/image/upload/v1680279390/skbf16gfx3at5vbh2ex8.png'
        const to = email
        const subject = `¡Thanks for your purchase ${name} ${lastName}!`
        const text = `Your order id: ${idOrder}`
        const html = `<div style="color:grey; text-align:center"
            <div>
                <img src=${img} alt='Imagen encabezado compra aceptada'/>
            </div>
            <h1 style='color:white'>${title}</h1>
            <img style='background-color:purple' src='https://res.cloudinary.com/dtf2uzukd/image/upload/q_auto/v1680279390/skbf16gfx3at5vbh2ex8.webp' alt='imagen adidas'/>
            <h2 style='color:white'>Your Order:</h2>
            <table  style='text-align:left: padding:10px;min-width:80%'>
                <tr>
                    <th style='text-align:left'>Product</th><th>Quantity</th><th>Total Mount</th>
                </tr>
                ${product.map((prod) => {
                    return(
                        `<tr>
                            <td style='text-align:left'>${prod.name}</td>
                            <td style='text-align:right'>${prod?.quantity}</td>
                        </tr>`
                    )
                }).join(' ')}
                <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>Total:</td>
                    <td>${totalMount}</td>
                </tr>
            </table>
            <p style='padding:10px;margin:10px;text-align:center;border-top:1px solid white'>
            <strong>Status: </strong>${status}
        </div>`
       
        try{
         let infoSend =   nodeoutlook.sendEmail({
                host: "smtp.office365.com",
                port: 587,
                secure: false,
                auth: {
                    user: EMAIL_USERNAME,
                    pass: EMAIL_PASSWORD 
                },     

                from: '"Haal" <notificaciones.sports@outlook.es>',
                to, //ARRAY user.email
                subject,
                text,
                html,
              
                onError: (e) => console.log(e),
                onSuccess: (i) => console.log("Mail sent", i)
            })
        res.status(200).json("Email sent", infoSend)
        } catch(error){
            console.log(error)
        }
};

module.exports = {
    mailOrder
} */
