const { createNotificationHandler } = require("../../handlers/MailsHandlers/CreateNotificationHandler")
const { sendNotificationHandler } = require("../../handlers/MailsHandlers/sendNotificationHandler")

const { Router } = require("express");
const router = Router();

router.post("/mails/create-notification", createNotificationHandler)//  ruta: /mails/create-notification"
router.get("/mails/send-notification", sendNotificationHandler)

module.exports = router;

/*CICLO DE NOTIFICACIONES:

	1. Nuestra app crea una nueva notificación (createNotification controller) por correo electrónico en la base de datos, Usa EL id del usuario del Registro(userId). El registro de notificación además, incluye: el correo electrónico del destinatario(receiverEmail), el asunto, el contenido y el estado de envío(false por defecto)

	2. Nuestra app llama a la función middleware(oAuth) para autenticar al remitente del correo electrónico con Google OAuth2, utilizando la biblioteca del cliente API de Google y las credenciales almacenadas en el archivo .env. Crea al nuevo User(cliente) y toma el token de acceso(accessToken) y el token de actualización de la base de datos(refreshToken) GOOGLE_REFRESH_TOKEN, los establece en la Oauth2 y devuelve al cliente autenticado.

	3. Nuestra app llama a la función sendEmailNotification, con Nodemailer para redactar un mensaje de correo electrónico y la API de Gmail para enviar el mensaje. La función también marca la notificación como enviada en la base de datos(sent=true), actualizando el estado de la notificación.

    El usuario recibe la notificación por correo electrónico en su bandeja de entrada. */