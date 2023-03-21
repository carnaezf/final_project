const { transporter } = require("../mail/index");
const { EMAIL_USERNAME } = process.env

//Configuración de nodemailer para el envío de emails


const sendEmail = async (receiverEmail, subject, content) => {
    try{
        const mailInfo = {
            from: EMAIL_USERNAME,
            to: receiverEmail,
            subject: subject,
            html: content
        }
        const info = await transporter.sendMail(mailInfo);
        return info;
        
    } catch(error){
        console.log(`The email to ${receiverEmail} could not be sent`)
    }
};

module.exports = { 
    sendEmail 
};