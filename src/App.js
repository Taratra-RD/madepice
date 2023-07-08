import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Vanille from './pages/product/Vanille'
import Cafe from './pages/product/Cafe'
import Girofle from './pages/product/Girofle'
import Poivre from './pages/product/Poivre'
import Canelle from './pages/product/Canelle'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/vanille' element={<Vanille />} />
        <Route path='/cafe' element={<Cafe />} />
        <Route path='/girofle' element={<Girofle />} />
        <Route path='/poivre' element={<Poivre />} />
        <Route path='/canelle' element={<Canelle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
