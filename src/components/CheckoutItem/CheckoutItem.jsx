import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart } from '../../redux/cart/cartActions';

import './CheckoutItem.styles.scss'

const CheckoutItem = ({cartItem, clearItemFromCart }) => {
  const  {name, price, quantity, imageUrl } = cartItem;
  return (
    <div className="CheckoutItem">
      <div className="image-container">
        <img src={imageUrl} alt={name}/>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div 
        className="remove-button"
        onClick={()=> clearItemFromCart(cartItem)}
        >
          &#10005;
      </div>
    </div>
  );
};

export default connect(null, {clearItemFromCart})(CheckoutItem);