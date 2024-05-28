import React from 'react'
import './newCollection.css'
import new_product from './newImage/newimage'
import Item from '../item/item'

const NewCollection = () => {
  return (
    <div className='new-collection'>
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="collections">
        {new_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollection
