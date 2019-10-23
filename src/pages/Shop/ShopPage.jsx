import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../Collection/CollectionPage';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shopPage/shopActions';

class ShopPage extends React.Component {

  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const {updateCollections} = this.props;

    const collectonRef = firestore.collection("collections");

    collectonRef.onSnapshot(async (snapshot)=>{
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)

    })
  }
  
  render(){
    const { match } = this.props
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>

      </div>
    );
    }
}

export default connect(null, {updateCollections})(ShopPage);