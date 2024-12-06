import express from "express";
import { addToCart, update, remove, getCart } from '../Controller/cart' ;
import { isAuthenticated } from "../Controller/JWTAuthMiddleware";

const router = express.Router();

router.get("/getCart", isAuthenticated, getCart);
router.post("/addToCart", isAuthenticated, addToCart);
router.post("/delete", isAuthenticated, remove);
router.post("/update", isAuthenticated, update);

export = router;
