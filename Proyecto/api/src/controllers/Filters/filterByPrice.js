const { Product } = require("../../db");
//esta funcion trae todos los precios que coincidan con el parametro
// const filterByPrice = async (sellingPrice) => {
// const productPrice =await Product.findAll({
//     where:{
//         sellingPrice: sellingPrice  
//     }
// })
// return productPrice


// }

//esta funcion trae todos los productos que se encuentren dentro del rango pasado por query
const filterByRangePrice = async (sellingPriceMin,sellingPriceMax)=>{

    const productPrice  =await Product.findAll()
    //console.log(productPrice)
    const filter=productPrice.filter (product=>{
        return product.sellingPrice >= sellingPriceMin && product.sellingPrice <= sellingPriceMax
    })

return filter
}


module.exports = {
   
    filterByRangePrice
  };
  