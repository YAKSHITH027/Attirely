

import { Routes, Route } from "react-router-dom";
import Sidebar from "../AdminSide/Components/Sidebar";
import AddProducts from "../AdminSide/Pages/AddProducts";
import Dashboard from "../AdminSide/Pages/Dashboard";
import Orders from "../AdminSide/Pages/Orders";
import ProductsAdmin from "../AdminSide/Pages/ProductsAdmin";
import Sellers from "../AdminSide/Pages/Sellers";
import Transactions from "../AdminSide/Pages/Transactions";
import Users from "../AdminSide/Pages/Users";
import Categories from "../AdminSide/Pages/Categories";

import Home from "../UserSide/Pages/Home/Home";


export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cart" element={<Cart />}></Route>

      <Route
        path="/dashboard"
        element={
          <Sidebar>
            <Dashboard />
          </Sidebar>
        }
      ></Route>
      <Route
        path="/addproducts"
        element={
          <Sidebar>
            <AddProducts />
          </Sidebar>
        }
      ></Route>
      <Route
        path="/orders"
        element={
          <Sidebar>
            <Orders />
          </Sidebar>
        }
      ></Route>
      <Route
        path="/products"
        element={
          <Sidebar>
            <ProductsAdmin />
          </Sidebar>
        }
      ></Route>
      <Route
        path="/sellers"
        element={
          <Sidebar>
            <Sellers />
          </Sidebar>
        }
      ></Route>
      <Route
        path="/transactions"
        element={
          <Sidebar>
            <Transactions />
          </Sidebar>
        }
      ></Route>
      <Route
        path="/users"
        element={
          <Sidebar>
            <Users />
          </Sidebar>
        }
      ></Route>
      <Route
        path="/categories"
        element={
          <Sidebar>
            <Categories />
          </Sidebar>
        }
      ></Route>
     

      <Route path="/product/:products" element={<Products />}></Route>
      <Route path="/product/:products/:id" element={<SingleProduct />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  );
};
