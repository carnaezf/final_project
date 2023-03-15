const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Coustomer', {
    //console.Log("hola")
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    birthDate:{
        type:DataTypes.DATEONLY,
        allowNull: false,
    },
    country:{
        type: DataTypes.STRING,
        allowNull: false,
    },
   

  },{
    timestamps: false
});
};
