const express = require("express");
const userRoute = require("./user");
const productRoute = require("./products");
const category =require("./category")

const router = express.Router();
console.log("reached here");
router.use("/users", userRoute);
router.use("/products", productRoute);
router.use("/category",category)

module.exports = router;
