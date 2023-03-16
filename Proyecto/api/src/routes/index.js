const { getProductsHandler, getSearchHandler } = require("../handlers/index");
const { getByIdHandler } = require("../handlers/getByIdHandler");

const { Router } = require("express");
const router = Router();

router.get("/products", getProductsHandler);
router.get("/products/search", getSearchHandler);
router.get("/products/:id", getByIdHandler);

module.exports = router;
