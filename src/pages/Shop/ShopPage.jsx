import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverviewContainer';
import CollectionPageContainer from '../Collection/CollectionPageContainer';

//redux actions
import { fetchCollectionsStart } from '../../redux/shopPage/shopActions';


const ShopPage = ({match, fetchCollectionsStart})=> {
  
  useEffect(()=>{
    fetchCollectionsStart()
  }, [fetchCollectionsStart])

  return (
    <div className="shop-page">
      <Route exact 
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
        />
      <Route 
        path={`${match.path}/:collectionId`} 
        component={CollectionPageContainer}
      />

    </div>
  );
  
}

export default connect(null, {fetchCollectionsStart})(ShopPage);