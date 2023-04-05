const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
        // allowNull: false,
      },
      sellingPrice: {
        type: DataTypes.FLOAT,
      },

      average_rating: {
        type: DataTypes.FLOAT,
      },

      availability: {
        type: DataTypes.JSONB,
        defaultValue: [{ S: 5 }, { M: 3 }, { L: 2 }],
      },

      category: {
        type: DataTypes.STRING,
      },

      breadcrumbs: {
        type: DataTypes.STRING,
        defaultValue: "men/clothing",
      },
      totalAvailability: {
        type: DataTypes.INTEGER,
      },
      reviews_count: {
        type: DataTypes.FLOAT,
      },
      show: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        //allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
