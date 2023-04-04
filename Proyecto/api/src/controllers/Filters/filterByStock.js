
const { Product } = require("../../db");
const {getProducts} =require("../index")

const filterByStock = async () => {
const productStock =await getProducts()

let totaliSuma=0
let j=0
let k=1
let n=2

for (let i=0; i<productStock.length;i++){
  totaliSuma=Number(productStock[i].dataValues.availability[j].S)+Number(productStock[i].dataValues.availability[k].M)+Number(productStock[i].dataValues.availability[n].L)
  productStock[i].dataValues.totalAvailability=totaliSuma
 }

let stock=[]
for(let i=0;i<productStock.length;i++){
  if(productStock[i].dataValues.totalAvailability>0)
  stock.push(productStock[i].dataValues)
}

  return stock;
};

module.exports = {
  filterByStock,
};
