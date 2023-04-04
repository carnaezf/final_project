const { Category } = require("../db.js");

const getAllCategory = async () => {
  const arrayCategory = [
    "clothing",
    "shoes",
    "accessories",
    "sports",
    "sustainable collection",
  ];

  const categoriesData = await Category.findAll();
  if (categoriesData.length === 0) {
    const categories = await Category.bulkCreate(
      arrayCategory.map((category) => ({ type: category }))
    );
    return categories;
  } else {
    return categoriesData;
  }
};
// las categorias estan dentro de un array, y se crea un array de objetos con el map [ {type: "clothing"}], etc
//tambien poseen un id, que se crea automaticamente

module.exports = {
  getAllCategory,
};
