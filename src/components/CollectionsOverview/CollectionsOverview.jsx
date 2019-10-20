import React from 'react';
import { connect } from 'react-redux';
//components
import CollectionPreview from '../CollectionPreview/CollectionPreview';
//redux selectors
import { selectShopPageCollections } from '../../redux/shopPage/shopPageSelectors';

// styles
import './CollectionsOverview.styles.scss';

const CollectionsOverview = ({collections}) => {
  return (
    <div className='CollectionsOverview'>
      {
        collections.map(({id, ...restProps})=>(
          <CollectionPreview key={id} {...restProps}/>
        ))
      }
    </div>
  );
};

const mapStateToProps = (state)=>({
  collections: selectShopPageCollections(state)
})
export default connect(mapStateToProps)(CollectionsOverview);