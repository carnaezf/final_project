const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

   sequelize.define("Notification", {
      id: {
         type: DataTypes.UUID,
         defaultValue: DataTypes.UUIDV4,
         primaryKey: true,
      },
      receiverEmail: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      subject: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      content: {
         type: DataTypes.TEXT,
         allowNull: false,
      },
      sent: {
         type: DataTypes.BOOLEAN,
         defaultValue: false,
      },
   },
   {
      tableName: "Notification",
   })
};