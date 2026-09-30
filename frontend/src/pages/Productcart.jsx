import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fatchProduct } from '../redux/productSlice';
import { addToCart, fatchcart, fatchcartdelete } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Productcart() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const { userid, token } = useSelector((state) => state.login)


  const products = useSelector((state) => state.product.items);
  const cart = useSelector((state) => state.cart.items)

  useEffect(() => {
    dispatch(fatchProduct());
  }, [dispatch])
  useEffect(() => {
    if (userid) dispatch(fatchcart());
  }, [dispatch, userid])


  return (

    <section className="w-full">

      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Explore Products
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Find something you'll love.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6 p-20">
        {products.map((product) => (
          <Link key={product._id} to={`/productdetail/${product._id}`}>
            <div

              className="overflow-hidden  border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className=" items-center justify-center h-48  w-full bg-gray-50">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.title}
                </h3>

                <p className="mt-1 text-xl font-bold text-indigo-600">
                  ₹ {product.price.toLocaleString("en-IN")}
                </p>

                {
                  cart.find((item) => (item.productid?._id ?? item.productid) === product._id) ? (userid ? <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      dispatch(fatchcartdelete({ userid, productid: product._id }))
                    }}
                    className="mt-4 w-full rounded-sm bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-700 active:scale-95"
                  >
                    - Remove
                  </button> : <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    //   dispatch(fatchcartdelete({userid,productid:product._id}))}}
                    className="mt-4 w-full rounded-sm bg-teal-700 px-4 py-3 font-semibold text-white transition hover:bg-teal-800 active:scale-95"
                  >
                    +Add to cart
                  </button>) : <button

                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      dispatch(addToCart(product._id))
                    }}
                    className="mt-4 w-full rounded-sm bg-teal-600 px-4 py-3 font-semibold text-white transition hover:bg-teal-700 active:scale-95"
                  >
                    +  Add  to cart
                  </button>




                }
              </div>
            </div>
          </Link>
        ))}
      </div>

    </section>

  )
}
