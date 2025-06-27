import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";
import ShoppingCart from "./pages/ShoppingCart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
