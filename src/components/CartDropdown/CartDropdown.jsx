import React from 'react';
import CustomBtn from '../CustomBtn/CustomBtn';

import './CartDropDown.styles.scss'

const CartDropdown = () => {
  return (
    <div className="CartDropdown">
      <div className="cart-items">

      </div>
      <CustomBtn>Go to Checkout </CustomBtn>
    </div>
  );
};

export default CartDropdown; 