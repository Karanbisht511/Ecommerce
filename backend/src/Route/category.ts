import express from "express";
import { getAllCategories, add, remove, update } from "../Controller/category";
import { isAuthenticated } from "../Controller/JWTAuthMiddleware";

const router = express.Router();

router.get("/categories", getAllCategories);
router.post("/add", isAuthenticated, add);
router.post("/delete", isAuthenticated, remove);
router.post("/update", isAuthenticated, update);

export = router;
