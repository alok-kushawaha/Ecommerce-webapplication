import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white mt-10">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-teal-600 p-2 rounded-lg">
                <FaCartShopping className="text-xl" />
              </div>

              <h2 className="text-2xl font-bold">
                Shop<span className="text-teal-500">Mart</span>
              </h2>
            </div>

            <p className="text-gray-400 leading-7">
              Your one-stop shop for the best products at
              the best prices. Shop easily and securely with us.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center
                rounded-full border border-gray-700
                hover:bg-teal-600 hover:border-teal-600
                transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center
                rounded-full border border-gray-700
                hover:bg-teal-600 hover:border-teal-600
                transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center
                rounded-full border border-gray-700
                hover:bg-teal-600 hover:border-teal-600
                transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center
                rounded-full border border-gray-700
                hover:bg-teal-600 hover:border-teal-600
                transition"
              >
                <FaYoutube />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center
                rounded-full border border-gray-700
                hover:bg-teal-600 hover:border-teal-600
                transition"
              >
                <FaLinkedinIn />
              </a>

            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a
                  href="/"
                  className="hover:text-teal-400 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/shop"
                  className="hover:text-teal-400 transition"
                >
                  Shop
                </a>
              </li>

              <li>
                <a
                  href="/categories"
                  className="hover:text-teal-400 transition"
                >
                  Categories
                </a>
              </li>

              <li>
                <a
                  href="/cart"
                  className="hover:text-teal-400 transition"
                >
                  Cart
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="hover:text-teal-400 transition"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="hover:text-teal-400 transition"
                >
                  Contact Us
                </a>
              </li>

            </ul>
          </div>


          {/* Customer Support */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Customer Support
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition"
                >
                  Help Center
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition"
                >
                  FAQs
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition"
                >
                  Shipping Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition"
                >
                  Return & Refund
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="hover:text-teal-400 transition"
                >
                  Contact Us
                </a>
              </li>

            </ul>
          </div>


          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Newsletter
            </h3>

            <p className="text-gray-400 mb-5 leading-6">
              Subscribe to get special offers, new products
              and latest updates.
            </p>

            <div className="flex flex-col gap-3">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg
                bg-gray-900 border border-gray-700
                text-white outline-none
                focus:border-teal-500"
              />

              <button
                className="w-full py-3 rounded-lg
                bg-teal-600 hover:bg-teal-700
                font-semibold transition"
              >
                Subscribe
              </button>

            </div>
          </div>

        </div>
      </div>


      {/* Bottom Footer */}
      <div className="border-t border-gray-800">

        <div
          className="max-w-7xl mx-auto px-6 py-5
          flex flex-col md:flex-row
          items-center justify-between gap-4"
        >

          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} ShopMart.
            All rights reserved.
          </p>

          <div className="flex items-center gap-3">

            <span className="text-gray-500 text-sm">
              Secure Payments
            </span>

            <span className="px-2 py-1 bg-white text-blue-700
              text-xs font-bold rounded">
              VISA
            </span>

            <span className="px-2 py-1 bg-white text-gray-800
              text-xs font-bold rounded">
              MC
            </span>

            <span className="px-2 py-1 bg-white text-blue-600
              text-xs font-bold rounded">
              UPI
            </span>

            <span className="px-2 py-1 bg-white text-red-600
              text-xs font-bold rounded">
              RuPay
            </span>

          </div>

        </div>
      </div>

    </footer>
  );
}