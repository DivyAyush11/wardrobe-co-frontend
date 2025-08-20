import React from 'react'
import './NewCollections.css'
// import new_collection from '../Assets/Assets/new_collections'
import Item from '../Item/Item';

const NewCollections = (props) => {
  // Sort the incoming data by date to find the newest items
  const sortedProducts = [...props.data].sort((a, b) => new Date(b.date) - new Date(a.date));
  const newCollectionItems = sortedProducts.slice(0, 8);

  return (
    <div className='new-collections' id='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections"> 
            {newCollectionItems.map((item, i) => {
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

export default NewCollections
