import { Router } from "express";
import express from 'express'
import {addtocart,getcart,deletecartitem,updatecart} from '../controllers/cartController.js'
import {userauth} from '../middleware/authMiddelware.js'


const router = express.Router()
router.post("/addtocart",addtocart)
router.post("/getcart",userauth,getcart)
router.post("/deletecart",userauth,deletecartitem)
router.put("/updatecart",userauth,updatecart)
export default router;