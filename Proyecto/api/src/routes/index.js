const { getProductsHandler, getSearchHandler, getByCategoryHandler, addReviewHandler } = require("../handlers/index");

const { Router } = require("express");
const router = Router();

router.get("/products", getProductsHandler);
router.get("/products/search", getSearchHandler);



















router.get("/products/:category", getByCategoryHandler)
router.put("/products/addReview", addReviewHandler)

module.exports = router;
