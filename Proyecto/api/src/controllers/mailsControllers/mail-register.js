const nodeoutlook = require('nodejs-nodemailer-outlook')
const { EMAIL_USERNAME, EMAIL_PASSWORD } = process.env;

const mailRegister = async (name, email) => {

  
    
    let img = 'https://res.cloudinary.com/dtf2uzukd/image/upload/q_auto/v1680291636/Images/dl8jjaj5otvalw4t8ouc.webp'

  const mailRegister = nodeoutlook.sendEmail({
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        auth: {
            user: EMAIL_USERNAME,
            pass: EMAIL_PASSWORD 
        },       
        from: '"Haal" <notificaciones.sports@outlook.es>',
        to: email, //ARRAY user.email
        subject:`¡Welcome ${name} !`,// "¡Bienvenido!"
        text: "Thanks for choosing us!",//`${req.body.name} gracias por registarse en Sports, ya puede disfrutar de la experiencia completa`,
        html: `<div>
                <img src=${img} alt='Imagen de Bienvenida'/>
             </div>`,
      
        onError: (e) => console.log(e),
        onSuccess: (i) => console.log("Mail sent", i)
     
    })
    console.log("Registration email sent")

};

module.exports = {
    mailRegister
}

/*const nodeoutlook = require('nodejs-nodemailer-outlook')
const { EMAIL_USERNAME, EMAIL_PASSWORD } = process.env;

const mailRegister = async (req, res) => {

    const { email, name } = req.body;
    
    let img = 'https://res.cloudinary.com/dtf2uzukd/image/upload/q_auto/v1680291636/Images/dl8jjaj5otvalw4t8ouc.webp'

  const mailRegister = nodeoutlook.sendEmail({
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        auth: {
            user: EMAIL_USERNAME,
            pass: EMAIL_PASSWORD 
        },       
        from: '"Haal" <notificaciones.sports@outlook.es>',
        to: email, //ARRAY user.email
        subject:`¡Welcome ${name} !`,// "¡Bienvenido!"
        text: "Thanks for choosing us!",//`${req.body.name} gracias por registarse en Sports, ya puede disfrutar de la experiencia completa`,
        html: `<div>
                <img src=${img} alt='Imagen de Bienvenida'/>
             </div>`,
      
        onError: (e) => console.log(e),
        onSuccess: (i) => console.log("Mail sent", i)
     
    })
    res.status(200).json("Registration email sent")

};

module.exports = {
    mailRegister
}
 */