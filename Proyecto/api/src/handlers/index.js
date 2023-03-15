const { getProducts, getSearch } = require("../controllers/index");

const getProductsHandler = async (req, res) => {
  try {
    const products = await getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ msg: "Products not found" });
  }
};

const getSearchHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const products = await getSearch(name);
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ msg: "Clothes not found" });
  }
};

module.exports = {
  getProductsHandler,
  getSearchHandler,
};
