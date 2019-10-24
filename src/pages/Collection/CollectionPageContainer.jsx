import { connect } from 'react-redux';
import {compose} from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/shopPage/shopPageSelectors';

import withSpinner from '../../components/hocs/withSpinner/withSpinner';

import CollectionPage from './CollectionPage';




// const mappState = createStructuredSelector({
//   isLoading: state => {
//     const loaded = selectIsCollectionsLoaded(state)
//     return !loaded;
//   }
// })

const mappState = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
})

// const CollectionPageContainer = connect(mappState)(withSpinner(CollectionPage))
const CollectionPageContainer = compose(
  connect(mappState),
  withSpinner
)(CollectionPage);


export default CollectionPageContainer;