const express = require("express");
const cart = require("../Controller/cart");
const { isAuthenticated } = require("../Controller/JWTAuthMiddleware");

const router = express.Router();

const { addToCart, update, remove, getCart } = cart;

router.get("/getCart", isAuthenticated, getCart);
router.post("/addToCart", isAuthenticated, addToCart);
router.post("/delete", isAuthenticated, remove);
router.post("/update", isAuthenticated, update);

module.exports = router;
