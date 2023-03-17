const { getProductsHandler, getSearchHandler, getByCategoryHandler, addReviewHandler, addCommentHandler } = require("../handlers/index");
const { getByIdHandler } = require("../handlers/getByIdHandler");


const { Router } = require("express");
const router = Router();

router.get("/products", getProductsHandler);

router.get("/products/search", getSearchHandler);

router.get("/products/:id", getByIdHandler);

router.get("/products/category/:category", getByCategoryHandler)

router.put("/products/addReview", addReviewHandler)

router.post("/products/addComment", addCommentHandler)

module.exports = router;
