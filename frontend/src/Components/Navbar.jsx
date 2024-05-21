import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" height="140px" width="140px" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li>Shop</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <FaShoppingCart />
      </div>
    </div>
  )
}

export default Navbar
