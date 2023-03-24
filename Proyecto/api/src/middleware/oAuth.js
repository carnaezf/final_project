// require('dotenv').config()
// const { google } = require("googleapis");
// const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN, GOOGLE_REDIRECT_URI, ACCESS_TOKEN } = process.env
// const OAuth2 = google.auth.OAuth2;

// // Para autenticar al remitente del email
// //Llamadas a la api de google
// //creación de instancia de google OauthClient2
// const oAuth2 = async () => {

//     const oAuth2Client = new OAuth2(
//         GOOGLE_CLIENT_ID,
//         GOOGLE_CLIENT_SECRET,
//         GOOGLE_REDIRECT_URI
//     );

//     oAuth2Client.setCredentials({
//         refresh_token: GOOGLE_REFRESH_TOKEN,
//         tls: {
//             rejectUnauthorized: false
//         }
//     });
// // console.log(oAuth2Client);
// //solicito un nuevo token
//     const accessToken = await oAuth2Client.getAccessToken((err, token) => {
//         if(err){
//             return console.log(err);
//         } else {
//             accessToken = token
//             callback(nodemailer.createTransport())
//         }
//         return accessToken;
//     })
// };


// module.exports = {
//     oAuth2
// };