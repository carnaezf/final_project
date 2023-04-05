require('dotenv').config()
const { Sequelize } = require('sequelize')
const fs = require('fs')
const path = require('path')

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env


const category = require('./models/Category')
const comment = require('./models/Comment')
const order = require('./models/Order')
const product = require('./models/Product')
const user = require('./models/User')

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
    native: false
  }
)

const basename = path.basename(__filename)
const modelDefiners = [product, user, comment, category, order]

fs.readdirSync(path.join(__dirname, '/models'))
  .filter(
    file =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach(file => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)))
  })

modelDefiners.forEach(model => model(sequelize))

let entries = Object.entries(sequelize.models)
let capsEntries = entries.map(entry => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1]
])

sequelize.models = Object.fromEntries(capsEntries)

const { Category, Comment, Order, Product, User } = sequelize.models

Category.hasMany(Product)
Product.hasOne(Category)

Order.belongsToMany(Product, { through: 'OrderProduct' })
Product.belongsToMany(Order, { through: 'OrderProduct' }) 

Product.hasMany(Comment) 
Comment.hasOne(Product) 

Comment.hasOne(User)
User.hasMany(Comment)

Order.belongsTo(User)
User.hasMany(Order)

module.exports = {
  ...sequelize.models,
  conn: sequelize
}

