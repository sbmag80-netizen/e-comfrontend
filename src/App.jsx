import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import AddProduct from "./pages/admin/AddProduct";
import ProductList from "./pages/admin/Products";
import Register from "./pages/admin/Register";
import Login from "./pages/admin/Login";
import User from "./pages/admin/User";
import ProductDetails from "./pages/admin/ProductDetails";
import Orders from "./pages/Orders";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Order from "./pages/admin/Order";



function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

  {/* Public Routes */}
  <Route path="/" element={<Home />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/shop" element={<ProductList />} />
  <Route path="/my-orders" element={<Orders />} />
  <Route path="/product/:id" element={<ProductDetails />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

  {/* Admin Layout Routes */}
  <Route path="/admin" element={<AdminLayout />}>
    <Route index element={<AddProduct />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="products" element={<AdminProducts />} />
    <Route path="users" element={<User />} />
    <Route path="orders" element={<Order />} />
  </Route>

</Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;