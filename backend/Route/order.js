const express = require("express");
const { isAuthenticated } = require("../Controller/JWTAuthMiddleware");
const { buyProducts } = require("../Controller/orders");
const router = express.Router();

router.post("/buyProducts", isAuthenticated, buyProducts);
// router.get('/ordersList',isAuthenticated)
// router.get('/order:id',isAuthenticated)
// router.post('/cancelOrder:id',isAuthenticated)
// router.update('/updateOrder',isAuthenticated)

module.exports = router;
