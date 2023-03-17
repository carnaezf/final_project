
const { getProductsHandler, getSearchHandler, getByCategoryHandler, addReviewHandler, addCommentHandler,createProductHandler, } = require("../handlers/index");


const {
  createUserHandler,
  getAllUserHandler,
} = require("../handlers/userHandler");

const { getByIdHandler } = require("../handlers/getByIdHandler");

const { Router } = require("express");
const router = Router();

router.get("/products", getProductsHandler);

router.get("/products/search", getSearchHandler);

router.get("/products/:id", getByIdHandler);

router.get("/products/category/:category", getByCategoryHandler);

router.put("/products/addReview", addReviewHandler);

router.post("/products", createProductHandler);

router.post("/user", createUserHandler);

router.get("/user", getAllUserHandler);

router.post("/products/addComment", addCommentHandler)

module.exports = router;
