import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import LoginSignup from './Pages/LoginSignup';
import Cart from '../src/Pages/cart';
import Shop from '../src/Pages/shop';
import ShopCategory from '../src/Pages/shopCategory';
import Product from '../src/Pages/product';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory category="men"/>} />
        <Route path="/women" element={<ShopCategory category="women"/>} />
        <Route path="/kid" element={<ShopCategory category="kid"/>} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
    </>
  );
}

export default App;
