const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "User",
    {
      userId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        // allowNull: false,
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
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isModerator: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      dni: {
        type: DataTypes.INTEGER,
        // allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      birthDate: {
        type: DataTypes.DATEONLY,
        // allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      google: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      rol: {
        type: DataTypes.ENUM("superadmin", "administrator", "commonuser"),
        defaultValue: "commonuser",
      },

      isBanned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      profilePicture: {
        type: DataTypes.TEXT,
        defaultValue:
          "https://www.ipnie.com/wp-content/uploads/2021/02/profile.jpeg",
      },
    },
    {
      timestamps: false,
    }
  );
};
