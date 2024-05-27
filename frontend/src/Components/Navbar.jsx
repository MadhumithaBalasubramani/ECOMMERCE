
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
        <li ><Link to="/">Shop </Link></li>
        <li><Link to="/men">Men </Link></li>
        <li><Link to="/women">Women </Link></li>
        <li><Link to="/kid">Kids </Link></li>
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
