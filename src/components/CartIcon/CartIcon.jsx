import React from 'react';
import {connect} from 'react-redux';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cartActions';
//selector
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

import './CartIcon.styles.scss';

const CartIcon = (props) => {
  return (
    <div 
      className="CartIcon"
      onClick={props.toggleCartHidden}
    >
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">{props.itemCount}</span>
    </div>
  );
};

const mapStateToProps = (state)=>{
  return {
    itemCount: selectCartItemsCount(state) //used selector
  }
}
export default connect(mapStateToProps, {toggleCartHidden})(CartIcon);