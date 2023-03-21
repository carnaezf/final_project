require('dotenv').config()
const { google } = require("googleapis");
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN } = process.env

// Para autenticar al remitente del email
//Llamadas a la api de google
//creación de instancia de google OauthClient2

const oAuth2Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    // GOOGLE_REDIRECT_URL//???
);

oAuth2Client.setCredentials({
    refresh_token: GOOGLE_REFRESH_TOKEN,
});

const accessToken = oAuth2Client.getAccessToken();
console.log(accessToken);

module.exports = accessToken;