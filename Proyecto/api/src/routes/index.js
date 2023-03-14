const {
    getProductsHandler
  } = require('../handlers/index')
  
  const { Router } = require('express')
  const router = Router()
  
  router.get('/products', getProductsHandler)
  
  module.exports = router
