import express from "express";
import { getAllProducts,getCategorizedData, getProduct, add, remove, update,migrationAPI } from "../Controller/products";
import { isAuthenticated } from "../Controller/JWTAuthMiddleware";

const router = express.Router();


router.post("/getAllProducts", getAllProducts);
router.get("/categorizedProducts", getCategorizedData);
router.get("/Product", getProduct);
router.post("/add", isAuthenticated, add);
router.post("/delete", isAuthenticated, remove);
router.post("/update", isAuthenticated, update);
router.get("/migration",  migrationAPI);

export = router;
