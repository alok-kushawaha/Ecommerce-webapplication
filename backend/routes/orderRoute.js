import express, { Router } from "express";
import {placeorder,getOrder} from '../controllers/orderController.js'
import {userauth} from '../middleware/authMiddelware.js'

const router=express.Router();
router.post("/orders",userauth,placeorder)
router.get("/order/:orderid",userauth,getOrder)
export default router;