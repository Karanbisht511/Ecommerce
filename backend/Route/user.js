const express=require('express')
const User=require('../Controller/user')

const router=express.Router()

const {login,signup,logout}=User

router.post("/login",login)
router.post('/signup',signup)
router.get('/logout',logout)

module.exports=router
