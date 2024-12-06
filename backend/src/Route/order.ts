import express from "express";
import { isAuthenticated } from "../Controller/JWTAuthMiddleware";
import { buyProducts } from "../Controller/orders"
const router = express.Router();

router.post("/buyProducts", isAuthenticated, buyProducts);
// router.get('/ordersList',isAuthenticated)
// router.get('/order:id',isAuthenticated)
// router.post('/cancelOrder:id',isAuthenticated)
// router.update('/updateOrder',isAuthenticated)

export = router;
