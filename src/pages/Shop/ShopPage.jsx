import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../Collection/CollectionPage';
//withSpinner HOC
import withSpinner from '../../components/hocs/withSpinner/withSpinner';
//redux actions
import { fetchCollectionsStartAsync } from '../../redux/shopPage/shopActions';
//redux selectors
import { selectIsCollectionsFetching, selectIsCollectionsLoaded } from '../../redux/shopPage/shopPageSelectors';

//components wrapped in Spinner
const CollectionPageWithSpinner = withSpinner(CollectionPage)
const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview)

class ShopPage extends React.Component {
  

  componentDidMount() {
    
    this.props.fetchCollectionsStartAsync()
  }
  
  render(){
    const { match, isFetching, isCollectionsLoaded } = this.props
    return (
      <div className="shop-page">
        <Route exact 
          path={`${match.path}`}
          render={props=><CollectionsOverviewWithSpinner isLoading={isFetching} {...props}/>}
          />
        <Route 
          path={`${match.path}/:collectionId`} 
          render={props=> <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props}/>}
        />

      </div>
    );
    }
}
const mapStateToProps = (state)=>({
  isFetching: selectIsCollectionsFetching(state),
  isCollectionsLoaded: selectIsCollectionsLoaded(state)

})
export default connect(mapStateToProps, {fetchCollectionsStartAsync})(ShopPage);