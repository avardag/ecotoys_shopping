import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverviewContainer';
import CollectionPageContainer from '../Collection/CollectionPageContainer';

//redux actions
import { fetchCollectionsStartAsync } from '../../redux/shopPage/shopActions';
//redux selectors
import { selectIsCollectionsFetching, selectIsCollectionsLoaded } from '../../redux/shopPage/shopPageSelectors';


class ShopPage extends React.Component {
  

  componentDidMount() {
    
    this.props.fetchCollectionsStartAsync()
  }
  
  render(){
    const { match } = this.props
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
}

export default connect(null, {fetchCollectionsStartAsync})(ShopPage);