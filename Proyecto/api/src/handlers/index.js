const {
  getProducts
} = require('../controllers/index')

const getProductsHandler = (req, res) => {
  getProducts()
  res.status(200).json('mika')
}

module.exports = {
  getProductsHandler
}
