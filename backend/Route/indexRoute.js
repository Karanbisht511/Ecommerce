const express = require("express");
const userRoute = require("./user");
const productRoute = require("./products");

const router = express.Router();
console.log("reached here");
router.use("/users", userRoute);
router.use("/products", productRoute);

module.exports = router;
