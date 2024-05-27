
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/cart';
import Shop from './Pages/shop';
import Men from './Pages/men';
import Women from './Pages/Women';
import Kids from './Pages/kids';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<Men/>} />
        <Route path="/women" element={<Women />} />
        <Route path="/kid" element={<Kids />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
