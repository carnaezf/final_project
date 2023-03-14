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
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address:{
        type: DataTypes.STRING,
      allowNull: false,
    },
    phone:{
      type: DataTypes.INTEGER,
    allowNull: false,
    },
    postalCode:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    paymentMethod:{
      type: DataTypes.STRING,
    allowNull: false,
    },
    total:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    subTotal:{
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey:true,
    },
    iva:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey:true,
      },
      status:{
        type: DataTypes.STRING,
        allowNull: false,
      }
    


  },{
    timestamps: false
});
};
