# Ecommerce-webapplication
mern-stack-store/

├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Cart.js
│   │   └── Order.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── cartController.js
│   │   └── orderController.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── cartRoutes.js
│   │   └── orderRoutes.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── app/
    │   │   └── store.js
    │   ├── services/
    │   │   └── api.js
    │   ├── redux/
    │   │   ├── authSlice.js
    │   │   ├── productSlice.jsx
    │   │   ├── cartSlice.js
    │   │   └── orderSlice.js
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── ProductCard.jsx
    │   │   └── ProtectedRoute.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── ProductDetails.jsx
    │   │   ├── Cart.jsx
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   ├── Checkout.jsx
    │   │   └── Orders.jsx
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json

