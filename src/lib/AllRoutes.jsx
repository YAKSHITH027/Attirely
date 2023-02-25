// import { Routes, Route } from "react-router-dom";
// import AddProducts from "../AdminSide/Pages/AddProducts";
// // import {AdminProducts} from "../Pages/AdminProducts";
// import Dashboard from "../AdminSide/Pages/Dashboard";
// import Orders from "../AdminSide/Pages/Orders";
// import Products from "../AdminSide/Pages/Products";
// import Sellers from "../AdminSide/Pages/Sellers";
// import Transactions from "../AdminSide/Pages/Transactions";
// import Users from "../AdminSide/Pages/Users";
// import Categories from "../AdminSide/Pages/Categories";
// import Home from "../UserSide/Pages/Home/Home";
// ogin from "../login/Login";
// import Signup from "../login/Signup";
// export const AllRoutes import UserProduct from "../UserSide/Pages/Products/Products";
// import Cart from "../UserSide/Pages/Cart/Cart";
// import SingleProduct from "../UserSide/Pages/SingleProductPage/SingleProduct";
// // import  UserProduct from "../UserSide/Pages/Products/Products";
// import L= () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />}></Route>
//       <Route path="/product/:products" element={<UserProduct />}></Route>
//       <Route path="/product/:products/:id" element={<SingleProduct />}></Route>
//       <Route path="/cart" element={<Cart />}></Route>
//       <Route path="/login" element={<Login />}></Route>
//       <Route path="/cart" element={<Cart />}></Route>
//       <Route path="/signup" element={<Signup />}></Route>

//       <Route path="/dashboard" element={<Dashboard />}></Route>
//       <Route path="/addproducts" element={<AddProducts />}></Route>
//       <Route path="/orders" element={<Orders />}></Route>
//       <Route path="/products" element={<Products />}></Route>
//       <Route path="/sellers" element={<Sellers />}></Route>
//       <Route path="/transactions" element={<Transactions />}></Route>
//       <Route path="/users" element={<Users />}></Route>
//       <Route path="/categories" element={<Categories />}></Route>
//     </Routes>
//   );
// };

// import { Routes, Route } from "react-router-dom";
// import AddProducts from "../AdminSide/Pages/AddProducts";
// // import {AdminProducts} from "../Pages/AdminProducts";
// import Dashboard from "../AdminSide/Pages/Dashboard";
// import Orders from "../AdminSide/Pages/Orders";
// import Products from "../AdminSide/Pages/Products";
// import Sellers from "../AdminSide/Pages/Sellers";
// import Transactions from "../AdminSide/Pages/Transactions";
// import Users from "../AdminSide/Pages/Users";
// import Categories from "../AdminSide/Pages/Categories";
// import Home from "../UserSide/Pages/Home/Home";
// import UserProduct from "../UserSide/Pages/Products/Products";
// import Cart from "../UserSide/Pages/Cart/Cart";
// import SingleProduct from "../UserSide/Pages/SingleProductPage/SingleProduct";
// // import  UserProduct from "../UserSide/Pages/Products/Products";
// import Login from "../login/Login";
// import Signup from "../login/Signup";
// export const AllRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />}></Route>
//       <Route path="/product/:products" element={<UserProduct />}></Route>
//       <Route path="/product/:products/:id" element={<SingleProduct />}></Route>
//       <Route path="/cart" element={<Cart />}></Route>
//       <Route path="/login" element={<Login />}></Route>
//       <Route path="/cart" element={<Cart />}></Route>
//       <Route path="/signup" element={<Signup />}></Route>

import { Routes, Route } from "react-router-dom";
import AddProducts from "../AdminSide/Pages/AddProducts";
// import {AdminProducts} from "../Pages/AdminProducts";
import Dashboard from "../AdminSide/Pages/Dashboard";
import Orders from "../AdminSide/Pages/Orders";
import ProductsAdmin from "../AdminSide/Pages/ProductsAdmin";
import Sellers from "../AdminSide/Pages/Sellers";
import Transactions from "../AdminSide/Pages/Transactions";
import Users from "../AdminSide/Pages/Users";
import Categories from "../AdminSide/Pages/Categories";

import Home from "../UserSide/Pages/Home/Home"
import Sidebar from "../AdminSide/Components/Sidebar";
import Products from "../UserSide/Pages/Products/Products";


import Cart from "../UserSide/Pages/Cart/Cart";
 import Login from "../login/Login";
 import Signup from "../login/Signup";
 import SingleProduct from "../UserSide/Pages/SingleProductPage/SingleProduct";
//  import  UserProduct from "../UserSide/Pages/Products/Products";

export const AllRoutes= ()=>{
    return(
        <Routes>
             <Route path="/" element={<Home/>}></Route>
            <Route path="/dashboard" element={<Sidebar><Dashboard/></Sidebar> }></Route>
            <Route path="/addproducts" element={<Sidebar><AddProducts/></Sidebar>}></Route>
            <Route path="/orders" element={<Sidebar><Orders/></Sidebar>}></Route>
            <Route path="/products" element={<Sidebar><ProductsAdmin/></Sidebar>}></Route>
            <Route path="/sellers" element={<Sidebar><Sellers/></Sidebar>}></Route>
            <Route path="/transactions" element={<Sidebar><Transactions/></Sidebar>}></Route>
            <Route path="/users" element={<Sidebar><Users/></Sidebar>}></Route>
            <Route path="/categories" element={<Sidebar><Categories/></Sidebar>}></Route> 
            {/* <Route path="/userpagesprodproducts" element={<Products/>}></Route> */}
            
            <Route path="/product/:products" element={<Products/>}></Route>
     <Route path="/product/:products/:id" element={<SingleProduct />}></Route>     
      <Route path="/login" element={<Login />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
       </Routes>  
    )
}




     
