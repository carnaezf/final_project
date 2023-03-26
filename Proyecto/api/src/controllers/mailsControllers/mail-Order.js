const nodeoutlook = require('nodejs-nodemailer-outlook')
const { EMAIL_USERNAME, EMAIL_PASSWORD } = process.env;
const { Product, Order, User } = require("../../db")

//toma los datos de la orden de compra de la base de datos
const mailOrder = async (req, res) => {

    //datos del pedido
    const order = await Order.findByPk( idOrder, {
            include: [{ model: Product}],
            attributes: [
                'idOrder', 
                'city', 
                'address', 
                'phone', 
                'postalCode', 
                'paymenthMethod', 
                'total', 
                'subTotal', 
                'iva', 
                'status'],
    })
    //datos del usuario registrado
    const user =  await User.findByPk(userId, {
        where: {
            
        }
    });
    //datos del producto

    const { name, email } = req.body
    const orderMail = nodeoutlook.sendEmail({
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        auth: {
            user: EMAIL_USERNAME,
            pass: EMAIL_PASSWORD 
        },       
        from: '"henry-sports" <notificaciones.sports@outlook.es>',
        to: email, //ARRAY user.email
        subject:`¡Thanks for choosing Sports ${name}!`,// "¡Bienvenido!"
        text: "Here are all the details of your purchase:",//`${req.body.name} gracias por registarse en Sports, ya puede disfrutar de la experiencia completa`,
        html: "<b>Hear details of your purchase:</b>",
      
        onError: (e) => console.log(e),
        onSuccess: (i) => console.log(i)
    })
    // console.log(mailRegister);
    res.status(200).json(req.body)

};

module.exports = {
    mailOrder
}
