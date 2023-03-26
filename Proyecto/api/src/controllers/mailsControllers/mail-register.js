const nodeoutlook = require('nodejs-nodemailer-outlook')
const { EMAIL_USERNAME, EMAIL_PASSWORD } = process.env;

const mailRegister = async (req, res) => {

    const { email, name } = req.body;

    // const html = `<div>
    //     <img src="" alt="wellcome"/>   
    // </div>`;

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
        to: email, //ARRAY user.email
        subject:`¡Welcome ${name} !`,// "¡Bienvenido!"
        text: "Thanks for choosing us!",//`${req.body.name} gracias por registarse en Sports, ya puede disfrutar de la experiencia completa`,
        html: "<div><b>Thanks for choosing us!</b><div>",
      
        onError: (e) => console.log(e),
        onSuccess: (i) => console.log("Mail sent", i)
     
    })

    res.status(200).json("Registration email sent")

};

module.exports = {
    mailRegister
}
