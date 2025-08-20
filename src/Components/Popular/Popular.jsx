import React from 'react'
import './Popular.css'
import Item from '../Item/Item';
// import data_product from '../Assets/Assets/data.js'

const Popular = (props) => {

  const popularInWomen = props.data
    .filter(item => item.category === 'womens')
    .slice(0, 4);
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
        <div className="popular-items">
            {popularInWomen.map((item, i) => {
                return <Item 
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular
