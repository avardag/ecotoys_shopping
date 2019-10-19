import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomBtn from '../CustomBtn/CustomBtn';
import CartItem from '../CartItem/CartItem';

import { toggleCartHidden } from '../../redux/cart/cartActions';

//Redux selector
import { selectCartItems } from '../../redux/cart/cartSelectors';

import './CartDropDown.styles.scss'

const CartDropdown = ({cartItems, history, dispatch}) => {
  return (
    <div className="CartDropdown">
      <div className="cart-items">
        {
          cartItems.length ?
          cartItems.map(cartItem=>(
            <CartItem key={cartItem.id} item={cartItem} />
          ))
          : <span className="empty-message">Your cart is empty</span>
        }
      </div>
      <CustomBtn
        onClick={()=>{
          history.push("/checkout")
          dispatch(toggleCartHidden())
        }}
      >Go to Checkout </CustomBtn>
    </div>
  );
};

const mapStateToProps = (state)=>({
  cartItems: selectCartItems(state)
})
export default withRouter(connect(mapStateToProps)(CartDropdown)); 