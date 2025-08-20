import React from 'react'
import './NewsLetter.css'
import { useState } from 'react';

const NewsLetter = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
        // Later, will add an API call here to save the email.
        setIsSubscribed(true);

        // Reset the form after 3 seconds
        // setTimeout(() => {
        //     setIsSubscribed(false);
        // }, 3000);
    };

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers on your Email</h1>
      <p>Subscribe to our newsletter and stay updated!</p>
      {isSubscribed ? (
        <p className="subscribe-success">Thank you for subscribing!</p>) : 
        (
          <div>
              <input type="email" placeholder='Enter Your Email-ID' />
              <button onClick={handleSubscribe}>Subscribe</button>
          </div>
        )}
    </div>
  )
}

export default NewsLetter
