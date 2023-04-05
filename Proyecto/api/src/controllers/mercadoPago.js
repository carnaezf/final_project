const mercadopago = require("mercadopago");
const Product = require("../models/Product");
require("dotenv").config();

mercadopago.configure({ access_token: process.env.MERCADOPAGO_KEY });

const mercadoPago = (req, res) => {
  const products = req.body;
  const preference = {
    items: products,
    back_urls: {
      // success: "http://localhost:3000",
      // failure: "http://localhost:3000",
      success: "finalproject-production-58fc.up.railway.app",
      failure: "finalproject-production-58fc.up.railway.app",
    },
    auto_return: "approved",
    binary_mode: true,
  };
  mercadopago.preferences
    .create(preference)
    .then((response) => res.status(200).json({ response }))
    .catch((error) => res.status(400).json({ error: error.message }));
};

module.exports = {
  mercadoPago,
};
