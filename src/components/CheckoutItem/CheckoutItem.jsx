import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItemToCart, removeItem } from '../../redux/cart/cartActions';

import './CheckoutItem.styles.scss'

const CheckoutItem = ({cartItem, clearItemFromCart, addItemToCart, removeItem }) => {
  const  {name, price, quantity, imageUrl } = cartItem;
  return (
    <div className="CheckoutItem">
      <div className="image-container">
        <img src={imageUrl} alt={name}/>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={()=>removeItem(cartItem)}>
          &#10094;
        </div>
          <span className="value">{quantity}</span>
        <div className="arrow" onClick={()=>addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
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

const mapDispatchToProps = {
  clearItemFromCart,
  addItemToCart,
  removeItem
}
export default connect(null, mapDispatchToProps)(CheckoutItem);