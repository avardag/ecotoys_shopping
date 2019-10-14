import React from 'react';

import CollectionItem from '../CollectionItem/CollectionItem';

import './CollectionPreview.styles.scss'

const CollectionPreview = ({title, items}) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {
          items
          .filter((i, index)=> index < 4)
          .map(({id, ...restProps})=>(
            <CollectionItem key={id} {...restProps}/>
          ))
        }
      </div>
    </div>
  );
};

export default CollectionPreview;