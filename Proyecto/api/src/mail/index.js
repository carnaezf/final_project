require('dotenv').config()
const nodemailer = require("nodemailer");
const { EMAIL_USERNAME, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, } = process.env
const { accessToken } = require("../middleware/oAuth")

//Configuración de nodemailer para enviar emails

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 587,//conexión SMTP separada para cada mensaje
    // port: 465, conexiones SMTP agrupadas
    auth: {
        type: "OAuth2",
        user: EMAIL_USERNAME,
        accessToken,
        clientId: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        refreshToken: GOOGLE_REFRESH_TOKEN
    }
});


module.exports = transporter;