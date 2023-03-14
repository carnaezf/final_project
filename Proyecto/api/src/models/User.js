const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "El email tiene que ser un correo valido",
          },
        },
      },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
      },


  },{
    timestamps: false
});
};
