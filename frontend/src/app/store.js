import {configureStore} from '@reduxjs/toolkit'
import productreducer from '../redux/productSlice.js'
import cartreducer from '../redux/cartSlice.js'
import loginreducer from '../redux/authSlice.js'
import login from "../redux/loginSlice.js"
import AdminAddpro from "../redux/adminSlice.js"
import AddProduct from './../admin/Addproduct';

export const store =configureStore({
    reducer:{
product:productreducer,
cart:cartreducer,
signup:loginreducer,
login:login,
AddProduct:AdminAddpro,

    }
})
export default store