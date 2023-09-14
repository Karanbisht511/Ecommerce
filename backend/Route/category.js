const express = require("express");
const category = require("../Controller/category");
const { isAuthenticated } = require("../Controller/JWTAuthMiddleware");

const router = express.Router();

const { getAllCategories, add, remove, update } = category;

router.get("/categories", getAllCategories);
router.post("/add", isAuthenticated, add);
router.post("/delete", isAuthenticated, remove);
router.post("/update", isAuthenticated, update);

module.exports = router;
