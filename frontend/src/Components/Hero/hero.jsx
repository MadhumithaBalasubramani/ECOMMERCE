import React from 'react'
import '../Hero/hero.css'
import handicon from '../Hero/image/byeicon.jpg'
import hero from '../Hero/image/hero.jpg'
const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>New Arrivals only</h2>
            <div>
                <div className='hand-hand-icon'>
                    <p>new</p>
                    <img src={handicon} alt="" height="200px" width="200px"/>
                </div>
                <p>collection</p>
                <p>for Everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src="" alt="" />
            </div>
            
        </div>
        <div className="hero-right">
               <img src={hero} alt="" height="400px" width="200px" /> 
            </div>
    </div>
  )
}

export default Hero