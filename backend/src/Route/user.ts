import express from "express";

const router = express.Router();

import { login, signup, logout } from "../Controller/user";

router.post("/login", login);
router.post("/signup", signup);
router.get("/logout", logout);

export = router;
