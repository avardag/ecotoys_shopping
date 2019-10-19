import React from 'react';
import {connect} from 'react-redux';

import CustomBtn from '../CustomBtn/CustomBtn';
import CartItem from '../CartItem/CartItem';
//Redux selector
import { selectCartItems } from '../../redux/cart/cartSelectors';

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

const mapStateToProps = (state)=>({
  cartItems: selectCartItems(state)
})
export default connect(mapStateToProps)(CartDropdown); 