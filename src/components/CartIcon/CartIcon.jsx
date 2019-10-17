import React from 'react';
import {connect} from 'react-redux';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cartActions';

import './CartIcon.styles.scss';

const CartIcon = (props) => {
  return (
    <div 
      className="CartIcon"
      onClick={props.toggleCartHidden}
    >
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">0</span>
    </div>
  );
};

export default connect(null, {toggleCartHidden})(CartIcon);