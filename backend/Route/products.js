const express=require('express')
const products=require('../Controller/products')
const {isAuthenticated}=require('../Controller/JWTAuthMiddleware')

const router=express.Router()

const {allProducts, add, remove, update}=products

router.get('/allProducts',isAuthenticated,allProducts)
router.post("/add",isAuthenticated,add)
router.post('/delete',isAuthenticated,remove)
router.post('/update',isAuthenticated,update)

module.exports=router
