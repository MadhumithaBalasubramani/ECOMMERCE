import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import LoginSignup from './Pages/LoginSignup';
// import Home from './Pages/home';
import Cart from './Pages/cart';


function App() {
  return (
    <>
    <Navbar/>
    
    <Routes>   
      {/* <Route path="/shop" element={<Shop/>}/>
      <Route path="/men" element={<Men/>}/>
      <Route path="/women" element={<Women/>}/>
      <Route path="/kids" element={<Kids/>}/> */}
      <Route path="/login" element={<LoginSignup/>}/>
      <Route path="/cart" element={<Cart/>}/>

      

    </Routes> 
    </>
  )
}
export default App;
