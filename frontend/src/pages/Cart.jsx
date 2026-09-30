import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import api from '../api/axios'
import { clearCart, fatchcart } from '../redux/cartSlice'
import { fatchcartdelete } from '../redux/cartSlice'
import {fatchupdatecart} from '../redux/cartSlice'
export default function Cart() {

const [shippingAddress, setShippingAddress] = useState('')
const [checkoutStatus, setCheckoutStatus] = useState('')
const [isCheckingOut, setIsCheckingOut] = useState(false)

const dispatch = useDispatch();

const {items}  = useSelector(
  (state) => state.cart
);
console.log(items)

useEffect(() => {
  dispatch(fatchcart());
}, []);
 const userid=localStorage.getItem("userid")
const handeldelete=(productid)=>{
   
dispatch(fatchcartdelete({
 productid,
  userid
}));
   
}

const handeleQuantity=(item,newQuantity)=>{
 const userid=localStorage.getItem("userid")
  dispatch(fatchupdatecart({
userid:userid,
productid:item.productid._id,
quantity:newQuantity
}));

  // dispatch(fatchcart());

 }

const handleCheckout = async () => {
  const address = shippingAddress.trim()
  if (!address) {
    setCheckoutStatus('Enter a shipping address to continue.')
    return
  }

  setIsCheckingOut(true)
  setCheckoutStatus('')
  try {
    const response = await api.post('/orders', { userid, shippingAddress: address })
    if (!response.data.success) {
      throw new Error(response.data.message || 'Unable to place order.')
    }

    dispatch(clearCart())
    setShippingAddress('')
    setCheckoutStatus(`Order placed successfully. Order ID: ${response.data.order._id}`)
  } catch (error) {
    setCheckoutStatus(error.response?.data?.message || error.message || 'Unable to place order.')
  } finally {
    setIsCheckingOut(false)
  }
}

const totalAmount = items.reduce(
  (total, item) => total + Number(item.productid?.price || 0) * item.quantity,
  0
)



  return (
   <div className="max-w-md mx-auto mt-16 bg-white rounded-sm overflow-hidden md:max-w-xl border border-gray-400">
    <div className="px-4 py-2 border-b border-gray-200">
        <h2 className="font-semibold text-gray-800">Shopping Cart</h2>
    </div>
{
    items.map((item)=>(
       <div key={item._id} className="flex flex-col divide-y divide-gray-200">
  
        <div className="flex items-center py-4 px-6">
            <img className="w-16 h-16 object-cover rounded" src={item.productid.image} alt="Product Image"/>
            <div className="ml-3">
                <h3 className="text-gray-900 font-semibold">{item.productid.title}</h3>
                <p className="text-gray-700 mt-1">Unit price: {Number(item.productid.price || 0).toFixed(2)}</p>
                <p className="text-gray-700">Subtotal: {(Number(item.productid.price || 0) * item.quantity).toFixed(2)}</p>
                   <div className='flex gap-1' > <p className='text-sm m-1'>Qyt: {item.quantity}</p>
                    <button onClick={() => handeleQuantity(item,item.quantity-1)} disabled={item.quantity <= 1} className="ml-auto px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-sm disabled:opacity-50">-</button>
                    <h1 className="ml-auto py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-sm">{item                                                                   .quantity}</h1>
                    <button onClick={() => handeleQuantity(item,item.quantity+1)} className="ml-auto py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-sm">+</button>
                    
                    
                   
            </div>

            </div>
        
            <button onClick={() => handeldelete(item.productid._id)} className="ml-auto py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
        Remove
      </button>
        </div>
       
    </div> 
    ))
}
    <div className="border-t border-gray-200 px-6 py-4">
      <p className="mb-3 font-semibold text-gray-900">Total: {totalAmount.toFixed(2)}</p>
      <label htmlFor="shipping-address" className="mb-1 block text-sm font-medium text-gray-700">
        Shipping address
      </label>
      <textarea
        id="shipping-address"
        value={shippingAddress}
        onChange={(event) => setShippingAddress(event.target.value)}
        rows={3}
        className="mb-3 w-full rounded-sm border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
        placeholder="Enter your delivery address"
      />
      <button
        type="button"
        onClick={handleCheckout}
        disabled={isCheckingOut || items.length === 0}
        className="w-full rounded-sm bg-green-600 px-4 py-3 font-semibold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isCheckingOut ? 'Placing order...' : 'Checkout'}
      </button>
      {checkoutStatus && <p role="status" className="mt-3 text-sm text-gray-700">{checkoutStatus}</p>}
    </div>
   </div>
  )
}
