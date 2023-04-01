const { getByIdHandler } = require("../handlers/FiltersHandler/getByIdHandler");
const {
  filterByPriceHandler,
} = require("../handlers/FiltersHandler/filterByPriceHandler");
const {
  filterByGenreHandler,
  filterBygenreandCategoryHandler,
} = require("../handlers/FiltersHandler/filterByGenreHandler");
const {
  filterByRatingHandler,
} = require("../handlers/FiltersHandler/filterByRatingHandler");
const {
  filterByReviewsHandler,
} = require("../handlers/FiltersHandler/filterByReviewsHandler");
const {
  filterByStockHandler,
} = require("../handlers/FiltersHandler/filterByStockHandler");
const {
  newOrderHandler,
} = require("../handlers/OrdersHandler/newOrderHandler");


// const { getProductsHandler, getSearchHandler, getByCategoryHandler, addReviewHandler } = require("../handlers/index");
// const { getByIdHandler } = require("../handlers/getByIdHandler");



const { getProductsHandler, getSearchHandler, getByCategoryHandler, addReviewHandler, addCommentHandler,createProductHandler, } = require("../handlers/index");


const {
  getAllOrdersHandler,
} = require("../handlers/OrdersHandler/getAllOrderHandler");
const {
  orderByIdHandler,
} = require("../handlers/OrdersHandler/orderByIdHandler");
const {
  filterOrderSattusHandler,
} = require("../handlers/OrdersHandler/filterOrderSatateHandler");
const {
  putOrderHandler,
} = require("../handlers/OrdersHandler/putOrderHandler");
const { Router } = require("express");
const router = Router();


const {
  createUserHandler,
  getAllUserHandler,
  updateUserHandler,
  deleteUserHandler,
  signInUserHandler,
  googleSignInHandler,
} = require("../handlers/userHandler");




const { mercadoPago } = require("../controllers/mercadoPago")

const { updateProductHandler } = require("../handlers/updateProductHandler");
const { allCategoryHandler } = require("../handlers/categoryHandler");
const { optionsAdminEditUserHandler } = require("../handlers/userAdminHandler");
const { veryfyToken } = require("../Token/tokenAdmin");
const {mailsTotalityHandler}=require("../handlers/mails/mailsHandler")

router.get("/products", getProductsHandler);

router.get("/products/search", getSearchHandler);

router.get("/products/:id", getByIdHandler);

router.get("/products/category/:category", getByCategoryHandler);

router.put("/products/addReview", addReviewHandler);

// router.post("/products", veryfyToken, createProductHandler);

router.post("/products", createProductHandler);

router.post("/user", createUserHandler);

router.get("/user", getAllUserHandler);

router.delete("/user/:userId", deleteUserHandler);

router.post("/products/addComment", addCommentHandler);

router.get("/products/price/range", filterByPriceHandler);
//http://localhost:3001/products/price/range?sellingPriceMin=10&sellingPriceMax=50

router.get("/products/genre/:genre", filterByGenreHandler);
//http://localhost:3001/products/genre/kids

router.get(
  "/products/genre/genre/:category/:genre",
  filterBygenreandCategoryHandler
);

//http://localhost:3001/products/genre/genre/women/shoes

router.get("/products/rating/rating", filterByRatingHandler);

//http://localhost:3001/products/rating/rating?ratingMin=3&ratingMax=5

router.get("/products/reviews/reviews", filterByReviewsHandler);
//http://localhost:3001/products/reviews/reviews?reviewMin=10&reviewMax=30

 router.post("/order", newOrderHandler);

router.get("/products/stock/stock", filterByStockHandler);
//http://localhost:3001/products/stock

router.get("/order", getAllOrdersHandler);

router.get("/order/detail/:idOrder", orderByIdHandler);
//http://localhost:3001/order/detail/3f987afa-114f-4132-8adf-581787e0da35

router.get("/order/status/:status", filterOrderSattusHandler);
//http://localhost:3001/order/status/aceptada

router.put("/order", putOrderHandler);

router.put("/products/:id", updateProductHandler);

router.put("/user/:id", updateUserHandler);


router.post("/order",newOrderHandler)

//Mails:


const { mailRegister  } =  require("../controllers/mailsControllers/mail-register");
const { mailOrder } =  require("../controllers/mailsControllers/mail-order");
const { uploadImage } =  require("../controllers/uploads-controllers/upload-controller");
const { uploadWidget } =  require("../controllers/uploads-controllers/widget");


router.post("/send-email/order", mailOrder)
//http://localhost:3001/send-email/order

router.post("/send-email/register", mailRegister);
//http://localhost:3001/mail/send-email/register

router.post("/products/upload", uploadImage )
//http://localhost:3001/products/upload

router.post("/products/upload-widget", uploadWidget )
//http://localhost:3001/products/upload

router.get("/categories", allCategoryHandler);

router.post("/user/signin", signInUserHandler);

router.post("/user/signin/google", googleSignInHandler);

//router.post("/admin", userAdminHandler);

router.put("/admin/:userId/:rol", optionsAdminEditUserHandler);

router.post("/payment/",mercadoPago)

router.get("/user/totalMails",mailsTotalityHandler)

module.exports = router;
