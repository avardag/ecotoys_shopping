import { compose } from 'redux';
import { connect } from 'react-redux';

import { selectIsCollectionsFetching } from '../../redux/shopPage/shopPageSelectors';
//withSpinner HOC
import withSpinner from '../hocs/withSpinner/withSpinner';
//component to be wrapped
import CollectionsOverview from './CollectionsOverview';




const mapStateToProps = (state)=>({
  isLoading: selectIsCollectionsFetching(state)
})

// const CollectionsOverviewContainer = connect(mapStateToProps)(withSpinner(CollectionsOverview))
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview)


export default CollectionsOverviewContainer;
