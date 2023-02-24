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
import Home from "../UserSide/Pages/Home/Home"
import Sidebar from "../AdminSide/Components/Sidebar";

export const AllRoutes= ()=>{
    return(
        <Routes>
             <Route path="/" element={<Home/>}></Route>
            <Route path="/dashboard" element={<Sidebar><Dashboard/></Sidebar> }></Route>
            <Route path="/addproducts" element={<Sidebar><AddProducts/></Sidebar>}></Route>
            <Route path="/orders" element={<Sidebar><Orders/></Sidebar>}></Route>
            <Route path="/products" element={<Sidebar><Products/></Sidebar>}></Route>
            <Route path="/sellers" element={<Sidebar><Sellers/></Sidebar>}></Route>
            <Route path="/transactions" element={<Sidebar><Transactions/></Sidebar>}></Route>
            <Route path="/users" element={<Sidebar><Users/></Sidebar>}></Route>
            <Route path="/categories" element={<Sidebar><Categories/></Sidebar>}></Route> 
       </Routes>  
    )
}

