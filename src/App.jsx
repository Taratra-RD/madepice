import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
import MuiPage from "./pages/MuiPage";
import Products from "./components/products/Products";
import Recettes from "./pages/Recettes";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/mui" element={<MuiPage />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/recettes" element={<Recettes />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
