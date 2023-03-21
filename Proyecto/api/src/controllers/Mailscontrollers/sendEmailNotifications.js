const { Notification, User } = require("../../db.js");
// const cron = require("nodo-cron")
const { sendEmail } = require("../../mail/sendMail.js");
//Envía notificaciones:
//Activar cuando un usuario se registra(evento en el front)
//Activar cuando un usuario realiza una compra(evento en el front)


//Encuentra las notificaciones que no se han enviado y envía los emails
const sendEmailNotifications = async() =>{
    try{
        const notifications = await Notification.findAll({
            where: {
                sent: false,
            },
            include: [ User ],
        });

        notifications.forEach(async(notification) => {
            await sendEmail(
                notification.receiverEmail,
                notification.subject,
                notification.content
            );
            notification.sent = true;
            await notification.save();
        });
    }catch(error){
        console.log("The notification email could not be sent")
    }
};

module.exports = {
    sendEmailNotifications
};


//Programar envíos todos los días a las 8am:
// cron.schedule("0 8 * * *", sendEmailNotifications);