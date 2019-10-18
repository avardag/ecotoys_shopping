import React from 'react';
import {connect} from 'react-redux';

import CustomBtn from '../CustomBtn/CustomBtn';
import CartItem from '../CartItem/CartItem';

import './CartDropDown.styles.scss'

const CartDropdown = ({cartItems}) => {
  return (
    <div className="CartDropdown">
      <div className="cart-items">
        {
          cartItems.map(cartItem=>(
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        }
      </div>
      <CustomBtn>Go to Checkout </CustomBtn>
    </div>
  );
};

const mapStateToProps = ({cart:{cartItems}})=>({
  cartItems
})
export default connect(mapStateToProps)(CartDropdown); 