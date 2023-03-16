const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Review', {
    
    comments: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: true,
      },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
  },{
    timestamps: false
});
};
