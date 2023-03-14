const axios = requiere('axios');
const { Product } = require("../db.js")
const { data } = require("../data/data")


const getById = async (dbId) => {
    const productDetail = {};

    if(dbId) {
        productDetail = await Product.findByPK(dbId)
    }
    productDetail = {
        name,
        description,
        selling_price,
        images,
        average_rating,
        availability,
        sku
    }
}