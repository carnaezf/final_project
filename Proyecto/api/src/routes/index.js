const { getProductsHandler, getSearchHandler } = require("../handlers/index");

const { Router } = require("express");
const router = Router();

router.get("/products", getProductsHandler);
router.get("/products/search", getSearchHandler);

module.exports = router;
