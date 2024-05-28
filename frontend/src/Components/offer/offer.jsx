import React from 'react'
import './offer.css'
import exclusive from '../offer/exlcusive.jpg'
const Offer = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive </h1>
            <h1> Offers for You</h1>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className='offers-right'>
            <img src={exclusive} alt="" />
        </div>
    </div>
  )
}

export default Offer