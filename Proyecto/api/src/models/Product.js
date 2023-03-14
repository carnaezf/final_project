const { DataTypes } = require('sequelize')
const { Sequelize } = require('sequelize')

module.exports = sequelize => {
  sequelize.define('product', {
    sku: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sellingPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    average_rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reviews_count: {
      type: DataTypes.INTEGER
    }
  }, {timestamps: false})
}
