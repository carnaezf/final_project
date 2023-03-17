//const { Product } = require("../db");
const {getProducts} = require("./index")

const filterByGenre=async (genre)=>{
const productGenre= await getProducts()
//console.log(productGenre)
const filterGenre=productGenre.filter(element=> element.dataValues.breadcrumbs.toLowerCase().includes(genre.toLowerCase()))
return filterGenre
}

module.exports = {
    filterByGenre
}