import React from "react";
import { Route, Routes } from "react-router-dom";
import Menubar from "./components/Navbar/Menubar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Products from "./components/Products/Products";
import SingleProduct from "./components/Products/SingleProduct";
import UpdateProduct from "./components/Products/UpdateProduct";
import Error from "./components/Error";



function App() {
  return (
    <div className="app">
      <Menubar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct/>} />
        <Route path="/products/updateID=:id" element={<UpdateProduct />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </div>
  );
}

export default App;
