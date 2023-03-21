const { sendEmailNotifications } = require("../../controllers/mailsControllers/sendEmailNotifications")


const sendNotificationHandler = async(req, res) => {

    try {
        const response = await sendEmailNotifications()
        
        res.status(200).send(response);

    } catch (error) {
        res.status(400).send(error.message)
    }
};

module.exports = {
    sendNotificationHandler
};
