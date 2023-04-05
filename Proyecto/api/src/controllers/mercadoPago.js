const mercadopago = require("mercadopago");
const Product = require("../models/Product");
require("dotenv").config();

mercadopago.configure({ access_token: process.env.MERCADOPAGO_KEY });

const mercadoPago = (req, res) => {

  const products = req.body;
  const preference = {
    items: products,
    back_urls: {

      //success: "http://localhost:3000/createProductOrder",
      //failure: "http://localhost:3000/errorOrder",


      success: "https://final-project-carnaezf.vercel.app/createProductOrder",
      failure: "https://final-project-carnaezf.vercel.app/errorOrder",

    },
    auto_return: "approved",
    binary_mode: true,
  };
  //console.log(mercadopago.payment,"mercadoPago.payment")
 // console.log(mercadopago,"mercadoPago")
  mercadopago.preferences
  .create(preference)
  .then((response) => res.status(200).json({ response }))

   .catch((error) => res.status(400).json({ error: error.message }));
};

module.exports = {
  mercadoPago,
};
