import React, { useState } from 'react'
import { useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { loginuser } from '../redux/loginSlice';
import { useEffect } from 'react';
import { clearCart } from "../redux/cartSlice";

export default function Login() {
    const navigate=useNavigate()
    const {loading,error,userid,token} =useSelector((state)=>state.login)

    
   ///       alok50015@gmail.com
////       123456

    
     const Dispatch=useDispatch();
    const [loginData, setFromdata]=useState({
        email:"",
        password:""
    });


 useEffect(() => {
    if (token) {
      navigate("/", { replace: true });
    }
  }, [token, navigate]);
    const handelSubmitdata=async(e)=>{
e.preventDefault();
  Dispatch(clearCart());
 Dispatch(loginuser(loginData))

    }


  return (

   
        <div className="bg-cover bg-center bg-fixed" >
    <div className="h-screen flex justify-center items-center">
        <div className="bg-teal-700 text-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
            <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
            <form onSubmit={handelSubmitdata} className='text-white'>
                <div className="mb-4">
                    <label className="block font-semibold  mb-2" >
                        Email Address
                    </label>
                    <input onChange={(e)=>setFromdata({...loginData,email:e.target.value})}
                        className=" rounded w-full py-2 px-3 bg-amber-50 text-black leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Enter your email address" />
                </div>
                <div className="mb-4">
                    <label className="block font-semibold  mb-2">
                        Password
                    </label>
                    <input onChange={(e)=>setFromdata({...loginData,password:e.target.value})}
                        className="rounded w-full py-2 px-3 bg-amber-50 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Enter your password" />
                    <a className=" hover:text-gray-800" >Forgot your password?</a>
                </div>
                <div className="mb-6">

                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
    
  )
}
