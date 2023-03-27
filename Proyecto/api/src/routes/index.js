

<<<<<<< HEAD
const { getByIdHandler } = require("../handlers/FiltersHandler/getByIdHandler");
const {filterByPriceHandler} = require("../handlers/FiltersHandler/filterByPriceHandler")
const {filterByGenreHandler,filterBygenreandCategoryHandler} = require("../handlers/FiltersHandler/filterByGenreHandler")
const {filterByRatingHandler}= require("../handlers/FiltersHandler/filterByRatingHandler")
const {filterByReviewsHandler}= require("../handlers/FiltersHandler/filterByReviewsHandler")
const {filterByStockHandler}= require("../handlers/FiltersHandler/filterByStockHandler")
const {newOrderHandler}=require("../handlers/OrdersHandler/newOrderHandler")
=======
const { getByIdHandler } = require("../handlers/getByIdHandler");
const {filterByPriceHandler} = require("../handlers/filterByPriceHandler")
const {filterByGenreHandler,filterBygenreandCategoryHandler} = require("../handlers/filterByGenreHandler")
const {filterByRatingHandler}= require("../handlers/filterByRatingHandler")
const {filterByReviewsHandler}= require("../handlers/filterByReviewsHandler")
const {filterByStockHandler}= require("../handlers/filterByStockHandler")

>>>>>>> origin/front
const { getProductsHandler, getSearchHandler, getByCategoryHandler, addReviewHandler, addCommentHandler,createProductHandler, } = require("../handlers/index");
const {getAllOrdersHandler}=require("../handlers/OrdersHandler/getAllOrderHandler")
const {orderByIdHandler}= require("../handlers/OrdersHandler/orderByIdHandler")
const {filterOrderSattusHandler}= require ("../handlers/OrdersHandler/filterOrderSatateHandler")
const {putOrderHandler}= require("../handlers/OrdersHandler/putOrderHandler")
const { Router } = require("express");
const router = Router();
const {createUserHandler,getAllUserHandler,updateUserHandler,deleteUserHandler} = require("../handlers/userHandler");
const { updateProductHandler } = require("../handlers/updateProductHandler");
const { allCategoryHandler } = require("../handlers/categoryHandler");
const {optionsAdminEditUserHandler}= require("../handlers/userAdminHandler")

router.get("/products", getProductsHandler);

router.get("/products/search", getSearchHandler);

router.get("/products/:id", getByIdHandler);

router.get("/products/category/:category", getByCategoryHandler);

router.put("/products/addReview", addReviewHandler);

router.post("/products", createProductHandler);

router.post("/user", createUserHandler);

router.get("/user", getAllUserHandler);

router.delete("/user/:userId",deleteUserHandler)

router.post("/products/addComment", addCommentHandler);

router.get("/products/price/range", filterByPriceHandler);
//http://localhost:3001/products/price/range?sellingPriceMin=10&sellingPriceMax=50

router.get("/products/genre/:genre", filterByGenreHandler);
//http://localhost:3001/products/genre/kids

router.get("/products/genre/genre/:category/:genre",filterBygenreandCategoryHandler)
//http://localhost:3001/products/genre/genre/women/shoes

router.get("/products/rating/rating",filterByRatingHandler)

//http://localhost:3001/products/rating/rating?ratingMin=3&ratingMax=5

router.get("/products/reviews/reviews", filterByReviewsHandler);
//http://localhost:3001/products/reviews/reviews?reviewMin=10&reviewMax=30

router.get("/products/stock/stock",filterByStockHandler)
//http://localhost:3001/products/stock

router.get("/order", getAllOrdersHandler)

router.get("/order/detail/:idOrder",orderByIdHandler)
//http://localhost:3001/order/detail/3f987afa-114f-4132-8adf-581787e0da35

router.get("/order/status/:status",filterOrderSattusHandler)
//http://localhost:3001/order/status/aceptada

router.put("/order",putOrderHandler)

router.put("/products/:id", updateProductHandler);

router.put("/user/:id", updateUserHandler);

router.get("/categories", allCategoryHandler);

//router.post("/admin", userAdminHandler);

 router.put("/admin/:userId/:rol",optionsAdminEditUserHandler)

module.exports = router;
