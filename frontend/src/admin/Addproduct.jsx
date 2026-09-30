import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fatchadminAdd } from "../redux/adminSlice";
import api from "../api/axios";
import { Link, useLocation } from "react-router-dom";

export default function AddProduct() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { status, message } = useSelector((state) => state.AddProduct);
  const [localStatus, setLocalStatus] = useState("idle");
  const [localMessage, setLocalMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editProductId, setEditProductId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    brand: "",
    price: "",
    description: "",
    category: "",
    rating: "",
    stock: "",
    image: "",
  });

  const resetForm = () => {
    setFormData({
      title: "",
      brand: "",
      price: "",
      description: "",
      category: "",
      rating: "",
      stock: "",
      image: "",
    });
    setIsEditing(false);
    setEditProductId(null);
    setLocalMessage("");
    setLocalStatus("idle");
  };

  useEffect(() => {
    const selectedProduct = location.state?.product;
    if (selectedProduct) {
      setFormData({
        title: selectedProduct.title || "",
        brand: selectedProduct.brand || "",
        price: selectedProduct.price || "",
        description: selectedProduct.description || "",
        category: selectedProduct.category || "",
        rating: selectedProduct.rating || "",
        stock: selectedProduct.stock || "",
        image: selectedProduct.image || "",
      });
      setEditProductId(selectedProduct._id || null);
      setIsEditing(true);
      setLocalMessage("");
      setLocalStatus("idle");
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing && editProductId) {
        const response = await api.put(`/updateProduct/${editProductId}`, formData);
        if (response.data.success) {
          setLocalStatus("success");
          setLocalMessage(response.data.message || "Product updated successfully");
          resetForm();
          return;
        }

        setLocalStatus("failed");
        setLocalMessage(response.data.message || "Unable to update product");
        return;
      }

      await dispatch(fatchadminAdd(formData)).unwrap();
      setFormData({
        title: "",
        brand: "",
        price: "",
        description: "",
        category: "",
        rating: "",
        stock: "",
        image: "",
      });
    } catch {
      setLocalStatus("failed");
      setLocalMessage("Unable to save product");
    }
  };

  const displayMessage = localMessage || message;
  const displayStatus = localStatus === "idle" ? status : localStatus;
  const navButtonClass = "mt-6 rounded-xl bg-teal-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto flex max-w-3xl flex-wrap gap-3 rounded-2xl bg-white p-4 shadow-lg m-2">
        <Link to="/Admin" className={navButtonClass}>
          + Add Product
        </Link>
        <Link to="/Adminproduct" className={navButtonClass}>
          Product List
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg"
      >
        <h1 className="mb-6 text-2xl font-bold text-gray-800">
          Add New Product
        </h1>

        {displayMessage && (
          <p
            role="status"
            className={`mb-4 text-sm ${displayStatus === "success" ? "text-green-700" : "text-red-700"}`}
          >
            {displayMessage}
          </p>
        )}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Product Title
            </label>
            <input
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter product title"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Brand
            </label>
            <input
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              placeholder="Enter brand"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              name="price"
              type="number"
              min="0"
              required
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Enter category"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Rating
            </label>
            <input
              name="rating"
              type="number"
              value={formData.rating}
              onChange={handleChange}
              placeholder="Enter rating"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Stock
            </label>
            <input
              name="stock"
              type="number"
              min="0"
              required
              value={formData.stock}
              onChange={handleChange}
              placeholder="Enter stock quantity"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              name="image"
              type="url"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter product image URL"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter product description"
              required
              rows={4}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-xl bg-teal-700 py-3 font-semibold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? (isEditing ? "Updating Product..." : "Adding Product...") : isEditing ? "Update Product" : "Add Product"}
          </button>

          {isEditing && (
            <button
              type="button"
              onClick={resetForm}
              className="rounded-xl bg-gray-200 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-300"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}