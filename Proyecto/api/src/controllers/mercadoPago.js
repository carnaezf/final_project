const mercadopago = require('mercadopago')
require('dotenv').config()

mercadopago.configure({access_token: process.env.MERCADOPAGO_KEY})
axios.post("http://localhost:3001/payment", producto)
const mercadoPago = (req, res) => {
  const product = req.body
  const preference = {
    items: [
      {
        id: product.id,
        title: product.title,
        currency_id: 'ARS',
        picture_url: product.image,
        quantity: product.quantity,
        unit_price: product.price,
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
