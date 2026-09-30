import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Truck,
  ShieldCheck,
  Headphones,
  Heart,
  Star,
} from "lucide-react";

export default function Aboutus() {
  const features = [
    {
      icon: ShoppingBag,
      title: "Quality Products",
      description:
        "We carefully select products to provide quality and value to our customers.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Get your favorite products delivered quickly and safely to your doorstep.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Shopping",
      description:
        "Your security matters to us. Enjoy a safe and secure shopping experience.",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description:
        "Our support team is always ready to help you with your shopping experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-teal-700 text-white">

        {/* Background circles */}
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-teal-600 opacity-50"
        />

        <motion.div
          animate={{
            y: [0, -25, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-teal-800 opacity-50"
        />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-teal-700 shadow-xl"
          >
            <ShoppingBag size={40} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold md:text-6xl"
          >
            About Our Store
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-teal-50"
          >
            We are building a simple, reliable and enjoyable shopping
            experience where quality products meet great service.
          </motion.p>

        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-3 font-semibold uppercase tracking-wider text-teal-700">
              Our Story
            </p>

            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Shopping made simple
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Our goal is to make online shopping simple, convenient and
              enjoyable. From discovering products to placing an order,
              everything is designed with our customers in mind.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              We believe an ecommerce platform should not only offer products,
              but also create trust, convenience and a great customer
              experience.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                <Heart fill="currentColor" size={22} />
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  Made for our customers
                </p>
                <p className="text-sm text-gray-500">
                  Your satisfaction is our priority
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl bg-teal-700 p-8 shadow-2xl">

              <div className="grid grid-cols-2 gap-5">

                <div className="rounded-2xl bg-white p-6 text-center">
                  <h3 className="text-3xl font-bold text-teal-700">
                    10K+
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Happy Customers
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 text-center">
                  <h3 className="text-3xl font-bold text-teal-700">
                    5K+
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Products
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 text-center">
                  <h3 className="text-3xl font-bold text-teal-700">
                    4.8
                  </h3>

                  <div className="mt-2 flex justify-center text-yellow-400">
                    <Star fill="currentColor" size={16} />
                    <Star fill="currentColor" size={16} />
                    <Star fill="currentColor" size={16} />
                    <Star fill="currentColor" size={16} />
                    <Star fill="currentColor" size={16} />
                  </div>

                  <p className="mt-1 text-sm text-gray-500">
                    Customer Rating
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 text-center">
                  <h3 className="text-3xl font-bold text-teal-700">
                    24/7
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Support
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            <p className="font-semibold uppercase tracking-wider text-teal-700">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Everything you need for better shopping
            </h2>

            <p className="mt-4 text-gray-500">
              We focus on quality, convenience and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-7 shadow-sm transition-shadow hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                    <Icon size={27} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-500">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="px-6 py-20">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-teal-700 px-8 py-16 text-center text-white shadow-2xl md:px-20"
        >

          <h2 className="text-3xl font-bold md:text-4xl">
            Our Mission
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-teal-50">
            Our mission is to connect customers with products they love while
            providing a smooth, secure and memorable online shopping
            experience.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 rounded-xl bg-white px-7 py-3 font-semibold text-teal-700 shadow-lg"
          >
            Start Shopping
          </motion.button>

        </motion.div>

      </section>

    </div>
  );
}