const { Notification, User } = require("../../db.js");

//Busca a User en la BD, y crea la Notification en la base de datos con el id del usuario a enviarse con el atributo sent en false

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