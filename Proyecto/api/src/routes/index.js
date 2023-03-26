const { getByIdHandler } = require("../handlers/getByIdHandler");
const {filterByPriceHandler} = require("../handlers/filterByPriceHandler")
const {filterByGenreHandler} = require("../handlers/filterByGenreHandler")
const {filterByRatingHandler}= require("../handlers/filterByRatingHandler")
const {filterByReviewsHandler}= require("../handlers/filterByReviewsHandler")
const {filterByStockHandler}= require("../handlers/filterByStockHandler")
const {
    getProductsHandler, 
    getSearchHandler, 
    getByCategoryHandler, 
    addReviewHandler, 
    addCommentHandler,
    createProductHandler, 
 } = require("../handlers/index");
 
const {
  createUserHandler,
  getAllUserHandler,
  updateUserHandler,
} = require("../handlers/userHandler");
const { updateProductHandler } = require("../handlers/updateProductHandler");

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

router.post("/products/addComment", addCommentHandler);

router.get("/products/price/range", filterByPriceHandler);
//http://localhost:3001/products/price/range?sellingPriceMin=10&sellingPriceMax=50

router.get("/products/genre/:genre", filterByGenreHandler);
//http://localhost:3001/products/genre/kids

router.get("/products/rating/rating", filterByRatingHandler);
//http://localhost:3001/products/rating/rating?ratingMin=3&ratingMax=5

router.get("/products/reviews/reviews", filterByReviewsHandler);
//http://localhost:3001/products/reviews/reviews?reviewMin=10&reviewMax=30

router.get("/products/stock/:stock", filterByStockHandler);
//http://localhost:3001/products/stock/instock

router.put("/products/:id", updateProductHandler);

router.put("/user/:id", updateUserHandler);



//Mails:

const { mailRegister  } =  require("../controllers/mailsControllers/mail-register");
const { mailOrder } =  require("../controllers/mailsControllers/mail-order");

router.post("/mail/send-email", mailOrder)
//http://localhost:3001/send-email/order

router.post("/send-email/register", mailRegister)
//http://localhost:3001/mail/send-email/register


module.exports = router;