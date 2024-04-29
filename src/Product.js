import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id,title, price, rating, image}) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }
  return (
    <div className="product">
        <div className='product_info'>
            <p>{title}</p>
            <div className='product_rating'>
            {Array(rating)
            .fill(true)
            .map((_,index)=>
            (<p key={index}>🌟</p>))}
            </div>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            
            </div>
            
            
            
            <img className='product_image' src={image} alt="product" />

            <button className='product_button' onClick={() => addToBasket()}>Add to Basket</button>
        </div>
  )
}

export default Product
