
import React, { useEffect, useState } from "react";
import { fatchProductid } from "../redux/productSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, fatchcartdelete } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";


export default function ProductDetail() {
  
  const Dispatch = useDispatch()
const navigate =useNavigate()
  const { id } = useParams();
  const cartid = useSelector((state) => state.product.selectedProduct)
const cart =useSelector((state)=>state.cart.items)
  const userid=useSelector((state)=>state.login.userid)
  console.log(cartid)

  useEffect(() => {
    Dispatch(fatchProductid(id));
  }, [id, Dispatch])
  if (!cartid){
    return <p>loading...</p>
  }
  return (

    <div className="bg-gray-100 min-h-screen">








      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">

          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8">

            <img
              src={cartid.image}
              alt="Product"
              className="w-full h-[500px] object-contain rounded-lg shadow-md mb-4 bg-white"
            />

            {/* Thumbnails */}
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {/* {thumbnails.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setMainImage(image)}
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                />
              ))} */}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4">

            <h2 className="text-3xl font-bold mb-2">
              {cartid.title}
            </h2>

            <p className="text-gray-600 mb-4">
            {cartid.brand}
            </p>

            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">
                {cartid.price}
              </span>

              <span className="text-gray-500 line-through">
                20000
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-4">

              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}

              <span className="ml-2 text-gray-600">
                4.5 (120 reviews)
              </span>
            </div>

            <p className="text-gray-700 mb-6">
             {cartid.description}
            </p>

            {/* Color */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Color:
              </h3>

              <div className="flex space-x-2">
                <button
                  className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                />

                <button
                  className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                />

                <button
                  className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {cartid.stock}
              </label>

              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                defaultValue="1"
                className="w-20 text-center rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200"
              />
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 mb-6">

              {/* Add to Cart */}
{
  cart.find((item)=>(item.productid?._id ?? item.productid)===id)?(userid?<button
                className="bg-red-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
             onClick={()=>Dispatch(fatchcartdelete({userid,productid:id}))}
             >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1-1.5 0Z"
                  />
                </svg>

                Remove item
              </button>:<button
                className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
             onClick={()=>navigate("/login")}
             >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1-1.5 0Z"
                  />
                </svg>

               Add to cart
              </button>) : <button
                className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
             onClick={()=>Dispatch(addToCart(id))}
             >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1-1.5 0Z"
                  />
                </svg>

                Add to cart
              </button>
}


             

              {/* Wishlist */}
              <button
                className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>

                Wishlist
              </button>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Key Features:
              </h3>

              <ul className="list-disc list-inside text-gray-700">
                <li>Industry-leading noise cancellation</li>
                <li>30-hour battery life</li>
                <li>Touch sensor controls</li>
                <li>Speak-to-chat technology</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}


