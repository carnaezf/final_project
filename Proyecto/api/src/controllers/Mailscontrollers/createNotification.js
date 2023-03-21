const { Notification, User } = require("../../db.js");

//Busca a User en la BD, y crea la Notifications para enviarla a User

//Activar cuando un usuario se registra(evento en el front)
//Activar cuando un usuario realiza una compra(evento en el front)
//Activar cuando una orden fue despachada.(evento en el front)

const createNotification = async(userId, subject, content) => {
    try{
        
    const user = await User.findByPk(userId);

    const notification = Notification.create({
        receiverEmail: user.email,
        subject: subject,
        content: content,
    })
    return notification;

    }catch(err){
        console.log("Notification could not be created")
    }
};

module.exports = {
    createNotification
}