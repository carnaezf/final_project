
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    selling_price:{
      type: DataTypes.FLOAT,
    allowNull: false,
    },
    images:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    average_rating:{
      type: DataTypes.FLOAT,
    allowNull: false,
    },
    availability:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    sku:{
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey:true,
    },
    


  },{
    timestamps: false
});
};

