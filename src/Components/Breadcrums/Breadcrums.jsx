import React from 'react'
import './Breadcrums.css'; // Assuming you have a CSS file for styling
import arrow_icon from '../Assets/Assets/breadcrum_arrow.png';

const Breadcrums = (props) => {
    const { product } = props;
  return (
    <div className="breadcrums">
        HOME <img src={arrow_icon} alt="arrow" /> SHOP <img src={arrow_icon} alt="arrow" /> {product.category} <img src={arrow_icon} alt="arrow" /> {product.name}
    </div>
  )
}

export default Breadcrums
