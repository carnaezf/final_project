const { getAllProducts } = require('../controllers/getAllProducts')
  
  const getProductsHandler = (req, res) => {
    
    const response = getAllProducts()
    console.log(response);
    res.status(200).json(response)
  }
  
  module.exports = {
    getProductsHandler
  }