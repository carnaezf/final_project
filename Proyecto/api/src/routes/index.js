// const { Router } = require('express');
// // Importar todos los routers;
// // Ejemplo: const authRouter = require('./auth.js');


// const router = Router();

// // Configurar los routers
// // Ejemplo: router.use('/auth', authRouter);


// module.exports = router;

const { getProductsHandler } = require('../handlers/handlerGetAllProduct')
const { Router } = require('express')
const router = Router()


  router.get('/products', getProductsHandler)

  module.exports = router