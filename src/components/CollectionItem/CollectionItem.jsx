import React from 'react';
import { connect } from "react-redux";

import CustomBtn from '../CustomBtn/CustomBtn';
import { addItemToCart } from '../../redux/cart/cartActions';

import './CollectionItem.styles.scss';

const CollectionItem = ({item, addItemToCart}) => {
  const {name, price, imageUrl} = item
  return (
    <div className="collection-item">
      <div className="image" style={{backgroundImage: `url(${imageUrl})`}}></div>
      <div className="collection-footer">
        <span className="name">{ name }</span>
        <span className="price">{ price }</span>
      </div>
      <CustomBtn
        onClick={()=> addItemToCart(item)}
      >Add to cart</CustomBtn>
    </div>
  );
};


export default connect(null, {addItemToCart})(CollectionItem);