import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" height="110px" width="140px" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li>Shop <hr /></li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className="nav-login-cart">
       <Link to="/login"><button>Login</button></Link> 
        <p className='nav-cart' ><FaShoppingCart /></p>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar
