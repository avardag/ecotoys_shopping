import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../Collection/CollectionPage';
//withSpinner HOC
import withSpinner from '../../components/hocs/withSpinner/withSpinner';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shopPage/shopActions';

//components wrapped in Spinner
const CollectionPageWithSpinner = withSpinner(CollectionPage)
const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview)

class ShopPage extends React.Component {
  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const {updateCollections} = this.props;

    const collectonRef = firestore.collection("collections");

    collectonRef.onSnapshot(async (snapshot)=>{
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      this.setState({loading: false})
    })
  }
  
  render(){
    const { match } = this.props
    const {loading} = this.state;
    return (
      <div className="shop-page">
        <Route exact 
          path={`${match.path}`}
          render={props=><CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}
          />
        <Route 
          path={`${match.path}/:collectionId`} 
          render={props=> <CollectionPageWithSpinner isLoading={loading} {...props}/>}
        />

      </div>
    );
    }
}

export default connect(null, {updateCollections})(ShopPage);