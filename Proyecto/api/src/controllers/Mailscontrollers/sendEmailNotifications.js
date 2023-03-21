const { Notification, User } = require("../../db.js");
// const cron = require("nodo-cron")
const { sendEmail } = require("../../mail/sendMail.js");
//Envía notificaciones:
//Busca en la bd las notificaciones que estén en false, y envía por cada noficación en false un email, usando la función sendEmail(carpeta mail) para enviarla
//actualiza el estado de la notificación a true y lo guarda
//Se pueden programar los envíos...

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

//Programar envíos todos los días a las 8am:
// cron.schedule("0 8 * * *", sendEmailNotifications);

module.exports = {
    sendEmailNotifications
};

