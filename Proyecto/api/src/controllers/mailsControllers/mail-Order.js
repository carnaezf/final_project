const nodeoutlook = require('nodejs-nodemailer-outlook')
const { EMAIL_USERNAME, EMAIL_PASSWORD } = process.env;

const mailOrder = async (req, res) => {

    const { email, name } = req.body;

    // console.log(req.body);
  const mailRegister = nodeoutlook.sendEmail({
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        auth: {
            user: EMAIL_USERNAME,
            pass: EMAIL_PASSWORD 
        },       
        from: '"henry-sports" <notificaciones.sports@outlook.es>',
        to: req.body.email, //ARRAY user.email
        subject:`¡Bienvenido ${req.body.name} !`,// "¡Bienvenido!"
        text: "Texto del correo acá",//`${req.body.name} gracias por registarse en Sports, ya puede disfrutar de la experiencia completa`,
        html: "<b>Hola registro!!!</b>",
      
        onError: (e) => console.log(e),
        onSuccess: (i) => console.log(i)
    })
    console.log(mailRegister);
    res.status(200).json(req.body)
    // .then(()=>{
    //         console.log("Mail sent");
    //     })
   
};

module.exports = {
    mailRegister
}
