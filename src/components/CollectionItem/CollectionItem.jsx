import React from 'react';

import CustomBtn from '../CustomBtn/CustomBtn';

import './CollectionItem.styles.scss';

const CollectionItem = ({id, name, price, imageUrl}) => {
  return (
    <div className="collection-item">
      <div className="image" style={{backgroundImage: `url(${imageUrl})`}}></div>
      <div className="collection-footer">
        <span className="name">{ name }</span>
        <span className="price">{ price }</span>
      </div>
      <CustomBtn>Add to cart</CustomBtn>
    </div>
  );
};

export default CollectionItem;