const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Product",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sku: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      sellingPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      average_rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      // availability: {
        //   type: DataTypes.STRING,
        //   allowNull: false,
        // },
        category: {
          type: DataTypes.STRING,
          // allowNull: false,
        },
        
        reviews_count: {
          type: DataTypes.FLOAT,
        },
        
        images: {
          type: DataTypes.ARRAY(DataTypes.STRING),
          // allowNull: false,
        },
      },
    {
      timestamps: false,
    }
  );
};
