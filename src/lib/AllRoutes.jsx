import {Routes, Route} from "react-router-dom";
import AddProducts from "../AdminSide/Pages/AddProducts";
// import {AdminProducts} from "../Pages/AdminProducts";
import Dashboard from "../AdminSide/Pages/Dashboard";
import Orders from "../AdminSide/Pages/Orders";
import Products from "../AdminSide/Pages/Products";
import Sellers from "../AdminSide/Pages/Sellers";
import Transactions from "../AdminSide/Pages/Transactions";
import Users from "../AdminSide/Pages/Users";
import Categories from "../AdminSide/Pages/Categories";
import Home from "../UserSide/Pages/Home";

export const AllRoutes= ()=>{
    return(
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/addproducts" element={<AddProducts/>}></Route>
            <Route path="/orders" element={<Orders/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/sellers" element={<Sellers/>}></Route>
            <Route path="/transactions" element={<Transactions/>}></Route>
            <Route path="/users" element={<Users/>}></Route>
            <Route path="/categories" element={<Categories/>}></Route>
            <Route path="/" element={<Home/>}></Route>
        </Routes>
    )
}

