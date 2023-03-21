const { createNotification } = require("../../controllers/mailsControllers/createNotification")


const createNotificationHandler = async(req, res) => {

    try {
        const { userId, subject, content } = req.params;

        const notification = await createNotification(
            userId, 
            subject, 
            content
        )
        res.status(200).json(notification);

    } catch (error) {
        res.status(500).send(error.message)
    }
};

module.exports = {
    createNotificationHandler
};


