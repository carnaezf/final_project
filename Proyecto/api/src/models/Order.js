const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Order', {
    idOrder:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true,
    },
    paymentMethod:{
      type: DataTypes.STRING,
    allowNull: false,
    },
      status:{
        type: DataTypes.ENUM(
          "rechazada",
          "procesando",
          "aceptada",
         "completa"
        ),
      },
    product:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalMount:{
      type: DataTypes.STRING,
      //allowNull: false,
    },
    date:{
      type: DataTypes.DATEONLY,
     // allowNull: false,
    },
    notification:{
      type: DataTypes.BOOLEAN,
     // allowNull: false,
    }


  },{
    timestamps: false
});
};
