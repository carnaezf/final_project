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

        // type: DataTypes.INTEGER,
        // defaultValue: DataTypes.UUIDV4,
        // autoIncrement: true,
        // primaryKey: true,

      },
      name: {
        type: DataTypes.STRING


      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      sellingPrice: {
        type: DataTypes.FLOAT,
      },
      average_rating: {
        type: DataTypes.FLOAT,
      },
      availability: {
        type:DataTypes.JSONB,
      },
      category: {
        type: DataTypes.STRING,
      },
<<<<<<< HEAD
<<<<<<< HEAD
      // availability: {
      //   type: DataTypes.STRING,
      // },

      breadcrumbs:{
        type: DataTypes.STRING,
      },
        // category: {
        //   type: DataTypes.STRING,
        //   // allowNull: false,
        // },
=======
=======
>>>>>>> 2d5535572f986790c855b4f1b90acfaf2d6ab7de

      breadcrumbs: {
        type: DataTypes.STRING,
<<<<<<< HEAD
       },
<<<<<<< HEAD
>>>>>>> c0634645bcea6eaaaa8859a79a5c62060b43c611
=======
>>>>>>> 2d5535572f986790c855b4f1b90acfaf2d6ab7de
=======
      },
>>>>>>> origin/back
        
        reviews_count: {
          type: DataTypes.FLOAT,
        },
        images: {
          type: DataTypes.ARRAY(DataTypes.STRING),
          //allowNull: false,
        },
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
      // reviews_count: {
      //   type: DataTypes.FLOAT,
      // },
      // images: {
      //   type: DataTypes.ARRAY(DataTypes.STRING),
      //   // allowNull: false,
      // },

      // reviews_count: {
      //   type: DataTypes.FLOAT
      // },
      // images: {
      //   type: DataTypes.ARRAY(DataTypes.STRING),
      //   allowNull: false
      // }
=======
>>>>>>> c0634645bcea6eaaaa8859a79a5c62060b43c611
=======
>>>>>>> 2d5535572f986790c855b4f1b90acfaf2d6ab7de
=======
>>>>>>> fa17760a048b4141db904f30133b518a264bc823
    },
    {
      timestamps: false,
    }
  );
};
