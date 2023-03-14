const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Costumer', {
    userId:{

    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    lastName: {
       
      },
    dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    birthDate:{

    },


  },{
    timestamps: false
});
};
