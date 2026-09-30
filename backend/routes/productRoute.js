import { Router } from 'express';
import { productCreate,updateProduct,deleteProduct,getallproduct,getProductbyid} from '../controllers/productController.js';
import express from 'express';
import {userauth} from '../middleware/authMiddelware.js'

const router=express.Router()
router.post('/createproduct',productCreate)
router.put('/updateProduct/:id',updateProduct)
router.delete('/deleteProduct/:id',userauth,deleteProduct)
router.get('/getallproduct',getallproduct)
router.get('/getproductbyid/:id',getProductbyid)

export default router
