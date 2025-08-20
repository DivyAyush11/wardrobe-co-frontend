import React from 'react'
import './Hero.css'
import compass_icon from '../Assets/Assets/compass-icon.png'
import arrow_icon from '../Assets/Assets/arrow.png'
import hero_image from '../Assets/Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals Only</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>Explore</p>
                    <img src={compass_icon} alt="hand icon" />
                </div>
                <p>the latest</p>
                <p>Collections</p>
            </div>
            <a href='#new-collections' style={{ textDecoration: 'none' }}>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
            </a>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="hero" />
        </div> 
    </div>
  )
}

export default Hero
