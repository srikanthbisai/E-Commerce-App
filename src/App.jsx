import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/Allproducts';
import Order from './pages/Order/Order';
import NoPage from './pages/nopage/Nopage';
import DashboardTab from './pages/admin/dashboard/DashboardTab';


function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/allproducts" element={<Allproducts/>} />
          <Route path="/order" element={
            <ProtectedRoute>
              <Order/>
            </ProtectedRoute>
          } />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/dashboard" element={
            <ProtectedRouteForAdmin>
              <Dashboard/>
            </ProtectedRouteForAdmin>
          } />

          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/productinfo/:id' element={<ProductInfo/>} />
          <Route path='/addproduct' element={
            <ProtectedRouteForAdmin>
              <AddProduct/>
            </ProtectedRouteForAdmin>
          } />


          <Route path='/updateproduct' element={
            <ProtectedRouteForAdmin>
              <UpdateProduct/>
            </ProtectedRouteForAdmin>
          } />
          <Route path="/*" element={<NoPage/>} />
        </Routes>
        <ToastContainer/>
      </Router>
    </MyState>

  )
}

export default App 

// user 

export const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user')
  if(user){
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
}

// admin 

const ProtectedRouteForAdmin = ({children})=> {
  const admin = JSON.parse(localStorage.getItem('user'))

  if(admin.user.email === 'abc@gmail.com'){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }

}