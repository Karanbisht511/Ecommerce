import express from "express";
import userRoute from "./user";
import productRoute from "./products";
import category from "./category";
import cart from "./cart";
import order from "./order";

const router = express.Router();
console.log("reached here");
router.use("/users", userRoute);
router.use("/products", productRoute);
router.use("/category", category);
router.use("/cart", cart);
router.use("/orders", order);

export = router;
