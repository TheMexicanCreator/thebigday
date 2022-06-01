import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {
  const [{ cart }, dispatch] = useStateValue();
  console.log('This is the cart: ', cart)
  const AddToCart = () => {
    //Put item in the data layer
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className='product'>
        <div className='product_info'>
            <p> {title} </p>
            <p className='product_price'> 
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
              {Array(rating).fill().map((_, i) => (
                <p> 🌟 </p>
              ))}
            </div>
        </div>
        <img src={image} alt='' />
        <button onClick={AddToCart}> <strong> Add to Cart </strong> </button>
    </div>
  )
}

export default Product