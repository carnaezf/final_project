const { getProducts } = require("../controllers/index")
const { Product } = require("../db");

//DESDE LA BASE DE DATOS:
const getProductById = async (id) => {
  try {
      const products = await Product.findOne({
        where: { sku: id },
      });
   
     const detail = products.dataValues;
 
     return detail;
     
    } catch (error) {
      return "Id not found";
    }
  };
  
  module.exports = {
    getProductById
  }


  
  // getProductById("EH8629")
    
    //DESDE OTRO CONTROLLER:
    // const getProductById = async (sku) => {
    
    //     const productsInfo = await getProducts();
    // //    console.log(productsInfo);
    
    //    if(sku){
    //     const filterById = productsInfo.filter((product) => product.sku.toString() === sku.toString() )
    // //    console.log(filterById);
    //        return filterById;
    //     } 
    // };