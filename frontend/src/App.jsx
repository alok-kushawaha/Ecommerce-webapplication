import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Productcart from './pages/Productcart.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import { Routes,Route} from 'react-router-dom'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Aboutus from './pages/Aboutus.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import Profile from './pages/Profile.jsx'
import AddProduct from './admin/Addproduct.jsx'
// import Adminlogin from './pages/Adminlogin.jsx'
import Adminproductlist from './admin/Adminproductlist.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
<>
 {/* <Productcart/> */}
    <Navbar/>
<Routes>
    <Route path="/" element={<><Hero/><Productcart/></>}/>
    <Route path="/productdetail/:id" element={<ProductDetail/>}/>
     <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/profile" element={<Profile/>}/>
          <Route path="/Aboutus" element={<Aboutus/>}/>
      <Route path='/Admin' element={<AddProduct/>}/>
<Route path='/Adminproduct' element={<Adminproductlist/>}/>
      
</Routes>
{/* <Adminlogin/> */}
 <Footer />

</>
  )
}

export default App
