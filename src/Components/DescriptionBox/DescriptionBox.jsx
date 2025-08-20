import React from 'react'
import './DescriptionBox.css'; // Assuming you have a CSS file for styling
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p> An e-commerce website is an online platform that facilitate
                buying and selling of products or services over the internet and
                serves as a virtual marketplace where businesses and individiduals can
                showcase their products, interact with customers, and conduct
                transactions without the need for a physical presence. E-commerce
                websites have gained immense popularity due to their convenience,
                accessibility, and the global reach they offer.
            </p>
            <p>
                These websites typically feature product listings, detailed
                descriptions, images, and pricing information, allowing customers to
                browse and compare products easily. They often include a shopping cart
                functionality, enabling users to add items for purchase and proceed to
                checkout securely. Payment gateways are integrated to facilitate online
                transactions, ensuring a smooth and secure payment process.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox
