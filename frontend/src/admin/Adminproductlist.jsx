import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';

export default function Adminproductlist() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await api.get('/getallproduct');
      setProducts(response.data?.getallproduct || []);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to remove this product?');
    if (!confirmed) return;

    try {
      await api.delete(`/deleteProduct/${id}`);
      setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to delete product');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 shadow-lg">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl font-bold text-gray-800">Product List</h1>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/Admin"
              className="rounded-xl bg-teal-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
            >
              + Add Product
            </Link>
            <Link
              to="/Admin"
              className="rounded-xl bg-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-300"
            >
              ← Back
            </Link>
          </div>
        </div>

        {loading ? (
          <p className="text-center text-gray-600">Loading products...</p>
        ) : error ? (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">{error}</div>
        ) : products.length === 0 ? (
          <div className="rounded-xl border border-dashed border-gray-300 bg-gray-100 p-8 text-center text-gray-600">
            No products found.
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 bg-white text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">Image</th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">Product</th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">Brand</th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">Price</th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">Stock</th>
                  <th className="px-4 py-3 text-sm font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product._id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-14 w-14 rounded-lg object-cover"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/80x80?text=Image';
                        }}
                      />
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-medium text-gray-800">{product.title}</div>
                      <div className="text-xs text-gray-500">{product.category || 'General'}</div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{product.brand || 'No brand'}</td>
                    <td className="px-4 py-3 font-semibold text-teal-700">₹{product.price}</td>
                    <td className="px-4 py-3 text-gray-600">{product.stock}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <Link
                          to="/Admin"
                          state={{ product }}
                          className="rounded-lg bg-yellow-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-yellow-600"
                        >
                          Edit
                        </Link>
                        <button
                          type="button"
                          onClick={() => handleDelete(product._id)}
                          className="rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
