const { getProducts, getSearch, getByCategory, addReview } = require("../controllers/index");

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

const getByCategoryHandler = async (req, res) => {
  const { category } = req.params;
  try {
    const products = await getByCategory(category);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
const addReviewHandler = async (req, res) => {
  try {
    await addReview(req.body);
    res.status(200).json('Your review has been added. :)');
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};


module.exports = {
  getProductsHandler,
  getSearchHandler,
  getByCategoryHandler,
  addReviewHandler
};
