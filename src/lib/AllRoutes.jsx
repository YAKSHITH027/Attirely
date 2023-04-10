import { Routes, Route } from 'react-router-dom'
import AddProducts from '../AdminSide/Pages/AddProducts'
// import {AdminProducts} from "../Pages/AdminProducts";
import Dashboard from '../AdminSide/Pages/Dashboard'
import Orders from '../AdminSide/Pages/Orders'
import ProductsAdmin from '../AdminSide/Pages/ProductsAdmin'
import Sellers from '../AdminSide/Pages/Sellers'
import Transactions from '../AdminSide/Pages/Transactions'
import Users from '../AdminSide/Pages/Users'
import Categories from '../AdminSide/Pages/Categories'

import Home from '../UserSide/Pages/Home/Home'
import Sidebar from '../AdminSide/Components/Sidebar'
import Products from '../UserSide/Pages/Products/Products'

import Cart from '../UserSide/Pages/Cart/Cart'

import Login from '../login/Login'
import Signup from '../login/Signup'
import SingleProduct from '../UserSide/Pages/SingleProductPage/SingleProduct'
import Payment from '../UserSide/Pages/Payment/Paymet'
import Profile from '../UserSide/Pages/Profile/Profile'
import AdminLogin from '../login/Adminlogin'
import PrivateRouteUser from './PrivateRouteUser'
import Wishlist from '../UserSide/Pages/Wishlist/Wishlist'

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route
        path='/dashboard'
        element={
          <Sidebar>
            <Dashboard />
          </Sidebar>
        }
      ></Route>
      <Route
        path='/addproducts'
        element={
          <Sidebar>
            <AddProducts />
          </Sidebar>
        }
      ></Route>
      <Route
        path='/orders'
        element={
          <Sidebar>
            <Orders />
          </Sidebar>
        }
      ></Route>
      <Route
        path='/products'
        element={
          <Sidebar>
            <ProductsAdmin />
          </Sidebar>
        }
      ></Route>
      <Route
        path='/sellers'
        element={
          <Sidebar>
            <Sellers />
          </Sidebar>
        }
      ></Route>
      <Route
        path='/transactions'
        element={
          <Sidebar>
            <Transactions />
          </Sidebar>
        }
      ></Route>
      <Route
        path='/users'
        element={
          <Sidebar>
            <Users />
          </Sidebar>
        }
      ></Route>
      <Route
        path='/categories'
        element={
          <Sidebar>
            <Categories />
          </Sidebar>
        }
      ></Route>
      {/* <Route path="/userpagesprodproducts" element={<Products/>}></Route> */}

      <Route path='/product/:products' element={<Products />}></Route>
      <Route
        path='/product/:products/:id'
        element={
          <PrivateRouteUser>
            <SingleProduct />
          </PrivateRouteUser>
        }
      ></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/adminlogin' element={<AdminLogin />}></Route>
      <Route
        path='/cart'
        element={
          <PrivateRouteUser>
            <Cart />
          </PrivateRouteUser>
        }
      ></Route>
      <Route
        path='/wishlist'
        element={
          <PrivateRouteUser>
            <Wishlist />
          </PrivateRouteUser>
        }
      ></Route>

      <Route
        path='/profile'
        element={
          <PrivateRouteUser>
            <Profile />
          </PrivateRouteUser>
        }
      ></Route>
      <Route
        path='/payment'
        element={
          <PrivateRouteUser>
            <Payment />
          </PrivateRouteUser>
        }
      ></Route>
    </Routes>
  )
}
