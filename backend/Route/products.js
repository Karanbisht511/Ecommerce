const express = require("express");
const products = require("../Controller/products");
const { isAuthenticated } = require("../Controller/JWTAuthMiddleware");

const router = express.Router();

const { getAllProducts,getCategorizedData, getProduct, add, remove, update,migrationAPI } = products;

router.post("/getAllProducts", getAllProducts);
router.get("/categorizedProducts", getCategorizedData);
router.get("/Product", getProduct);
router.post("/add", isAuthenticated, add);
router.post("/delete", isAuthenticated, remove);
router.post("/update", isAuthenticated, update);
router.get("/migration",  migrationAPI);

module.exports = router;
