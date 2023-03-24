//const { Product } = require("../db");
<<<<<<< HEAD:Proyecto/api/src/controllers/Filters/filterByGenre.js
const {getProducts} = require("../index")
=======
const { getProducts } = require("./");
>>>>>>> f5de071f650ea1a9ed6b91d3b369a8115b04a145:Proyecto/api/src/controllers/filterByGenre.js

const filterByGenre=async (genre)=>{
const productGenre= await getProducts()
//console.log(productGenre)
const filterGenre=productGenre.filter(element=> element.dataValues.breadcrumbs.toLowerCase().startsWith(genre.toLowerCase()))
return filterGenre
}


const filterByGenreandCategory= async(category,genre)=>{
    if(genre&&category){
    const products=await filterByGenre(genre)
    //console.log(products)
    const catego=category.toLowerCase()
      const productsGenre=products.filter(el=>el.dataValues.breadcrumbs.toLowerCase().includes(catego))
       //console.log(filterCategory)
       return productsGenre
    }else{
        return "No existe esa combinacion"
    }
}




module.exports = {
    filterByGenre,
    filterByGenreandCategory
}
