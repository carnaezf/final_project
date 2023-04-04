// const cloudinary = require('../../utils/cloudinary')
const { uploadImage } = require("../controllers/upload-controller/upload");
const {
  getProducts,
  getSearch,
  getByCategory,
  addReview,
  addComment,
  createProduct,
  ProductBanned,
} = require("../controllers/");

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
    if (products.length === 0)
      return res.status(200).json("There are no products with that name");
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ msg: "Clothes not found" });
  }
};

const getByCategoryHandler = async (req, res) => {
  const { category } = req.params;
  const lcCategory = category.toLowerCase();
  try {
    const products = await getByCategory(lcCategory);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
const addReviewHandler = async (req, res) => {
  try {
    await addReview(req.body);
    res.status(200).json("Your review has been added. :)");
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const addCommentHandler = async (req, res) => {
  try {
    await addComment(req.body);
    res.status(200).json("Your comment has been added. :)");
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
const createProductHandler = async (req, res) => {
  const {
    name,
    description,
    sellingPrice,
    images,
    average_rating,
    category,
    reviews_count,
    availability,
    breadcrumbs,
  } = req.body;
  try {
    const urlImage = await uploadImage(images);
    // const imageurl = urlImage.secure_url;
    const image = urlImage.split(" ");
    console.log("images en index", image);
    const product = await createProduct(
      name,
      description,
      sellingPrice,
      image,
      average_rating,
      category,
      reviews_count,
      availability,
      breadcrumbs
    );
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const productBannedHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductBanned(id);
    res.status(200).send(product);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};
module.exports = {
  getProductsHandler,
  getSearchHandler,
  getByCategoryHandler,
  addReviewHandler,
  addCommentHandler,
  createProductHandler,
  productBannedHandler,
};
