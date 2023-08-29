import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SingleProduct from './pages/SingleProduct';
import MuiPage from './pages/MuiPage';
import Products from './components/products/Products';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Products />} />
        <Route path='/mui' element={<MuiPage/>}/>
        <Route path='/product' element={<Products />} />
        <Route path='/product/:name' element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
