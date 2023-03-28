const mercadopago = require('mercadopago')
require('dotenv').config()

mercadopago.configure({access_token: process.env.MERCADOPAGO_KEY})

const mercadoPago = (req, res) => {
  const product = req.body
  const preference = {
    items: [
      {
        id: product.id,
        title: product.title,
        currency_id: 'ARS',
        picture_url: "noImageSoFar",
        quantity: 1,
        unit_price: 5,
        description: product.description
      }
    ],
    back_urls: {
      success: 'http://localhost:3000',
      failure: 'http://localhost:3000'
    },
    auto_return: 'approved',
    binary_mode: true
  }
  mercadopago.preferences
    .create(preference)
    .then(response => res.status(200).send({ response }))
    .catch(error => res.status(400).send({ error: error.message }))
}

module.exports = {
  mercadoPago
}
