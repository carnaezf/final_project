// require('dotenv').config()
// const nodemailer = require("nodemailer");
// const { google } = require("googleapis");
// const { 
//     EMAIL_USERNAME, 
//     EMAIL_PASSWORD,
//     GOOGLE_CLIENT_ID, 
//     GOOGLE_CLIENT_SECRET, 
//     GOOGLE_REFRESH_TOKEN, 
//     GOOGLE_REDIRECT_URI 
// } = process.env;

//DESDE la api de google

// const OAuth2 = google.auth.OAuth2;
// //Obtengo el accessToken:
//     const oAuth2Client = new OAuth2(
//             GOOGLE_CLIENT_ID,
//             GOOGLE_CLIENT_SECRET,
//             GOOGLE_REDIRECT_URI
//         );

//     oAuth2Client.setCredentials({
//         refresh_token: GOOGLE_REFRESH_TOKEN,
//         tls: {
//             rejectUnauthorized: false
//         }
//     });
//     // console.log(oAuth2Client);
//     //solicito un nuevo token
//     const accessToken = oAuth2Client.getAccessToken( 
//     (err, token) => {
//         if(err){
//                 return console.log(err);
//             } else {
//                     accessToken = token
//                     callback(nodemailer.createTransport())
//                 }
//             }
//     )
//     // const autorizationUrl = oAuth2Client.generateAuthUrl({
//     //     access_type: 'offline',
//     //     include_granted_scopes: true
//     // })
//     //  console.log(accessToken);

// const sendEmail = async (req, res) => {
    
//         const { to, name, subject, text, html } = req.body;
 
//       const transporter = nodemailer.createTransport({
//         service: "gmail",
     
//         auth: {
//             type: "OAuth2",
//             user: EMAIL_USERNAME,
//             pass: EMAIL_PASSWORD,
//             clientId:  GOOGLE_CLIENT_ID,
//             clientSecret:GOOGLE_CLIENT_SECRET,
//             refreshToken: GOOGLE_REFRESH_TOKEN,
//             accessToken: accessToken
//         }
//     });

//     transporter.verify(function (error, success) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log("Server is ready to take our messages");
//         }
//     });

//     try {
//         let info = await transporter.sendMail({
//             from: '"henry-sports" <notifications.sports@gmail.com>',
//             to, //ARRAY
//             subject: `¡Bienvenido ${req.body.name} !`,
//             text: `${req.body.name} gracias por registarse en Sports, ya puede disfrutar de la experiencia completa`,
//             html: "<b>Hola registro!!!</b>" 
//         })
//        // console.log(info);
//         res.status(200).json(info).then(()=>{
//             console.log("Mail sent");
//         })
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({message: "Send mail failed"})
//     }

// };


// module.exports = {
//     sendEmail
// };