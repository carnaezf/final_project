const { createNotificationHandler } = require("../../handlers/MailsHandlers/CreateNotificationHandler")
const { sendNotificationHandler } = require("../../handlers/MailsHandlers/sendNotificationHandler")

const { Router } = require("express");
const router = Router();

router.post("/user/create-notification", createNotificationHandler)//"/admin/create-notification" o "/user/create-notification"
router.get("/user/send-notification", sendNotificationHandler)

module.exports = router;