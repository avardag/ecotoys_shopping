import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
//selectors
import { selectShopPageCollections } from '../../redux/shopPage/shopPageSelectors';

const ShopPage =({collections}) =>{
  
    return (
      <div className="shop-page">
        {
          collections.map(({id, ...restProps})=>(
            <CollectionPreview key={id} {...restProps}/>
          ))
        }
      </div>
    );
}

const mapStateToProps = (state)=>({
  collections: selectShopPageCollections(state)
})

export default connect(mapStateToProps)(ShopPage);