import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-70px)] overflow-hidden bg-teal-700">

      {/* Background Shapes */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-600 opacity-60"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-teal-800 opacity-70"
      />

      {/* Small floating dots */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute left-[10%] top-[20%] h-4 w-4 rounded-full bg-white/30"
      />

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute right-[15%] top-[30%] h-6 w-6 rounded-full bg-white/20"
      />

      {/* Main Content */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 lg:px-8">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"
          >
            <Sparkles size={17} />

            <span className="text-sm font-medium">
              New Collection Available
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
          >
            Discover Products
            <span className="mt-2 block text-teal-100">
              You'll Love.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 max-w-xl text-lg leading-8 text-teal-50"
          >
            Explore our collection of quality products at great prices.
            Shop easily, securely, and get your favorite products delivered
            right to your doorstep.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-4"
          >

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-teal-700"
            >
              Shop Now
              <ArrowRight size={19} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl border border-white/40 px-6 py-3 font-semibold text-white backdrop-blur-sm"
            >
              Explore Products
            </motion.button>

          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold">10K+</h3>
              <p className="text-sm text-teal-100">
                Customers
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">5K+</h3>
              <p className="text-sm text-teal-100">
                Products
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">4.8★</h3>
              <p className="text-sm text-teal-100">
                Rating
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* RIGHT PRODUCT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            type: "spring",
          }}
          className="relative flex justify-center"
        >

          {/* Floating Card */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-md"
          >

            {/* Glow */}
            <div className="absolute inset-0 scale-90 rounded-[40px] bg-white/20 blur-3xl" />

            {/* Card */}
            <div className="relative rounded-[32px] bg-white p-5 shadow-2xl">

              {/* Product Image */}
              <div className="flex h-[360px] items-center justify-center overflow-hidden rounded-[25px] bg-gray-100">

                <motion.img
                  animate={{
                    scale: [1, 1.04, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80"
                  alt="Featured product"
                  className="h-full w-full object-cover"
                />

              </div>

              {/* Product Info */}
              <div className="flex items-center justify-between px-2 pb-2 pt-5">

                <div>
                  <p className="text-sm text-gray-500">
                    Featured Product
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-gray-900">
                    Premium Collection
                  </h3>

                  <p className="mt-1 font-semibold text-teal-700">
                    ₹2,999
                  </p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-700 text-white"
                >
                  <ShoppingBag size={22} />
                </motion.div>

              </div>

            </div>

          </motion.div>

          {/* Floating Discount */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute -left-3 top-12 rounded-2xl bg-white px-5 py-4 shadow-xl md:-left-8"
          >
            <p className="text-xs text-gray-500">
              Special Offer
            </p>

            <p className="text-xl font-bold text-teal-700">
              30% OFF
            </p>
          </motion.div>

        </motion.div>

      </div>
      
    </section>
  );
}