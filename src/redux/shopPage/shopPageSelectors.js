import { createSelector } from 'reselect';


const selectShopPage = state => state.shopPage;

export const selectShopPageCollections = createSelector(
  [selectShopPage],
  (shopPage) => shopPage.collections
)

//currying function
//gets collection from state.shopPage.collections based on url param
//to be used in mapStateToProps with argument of ownProps.match.params.collectionId
export const selectCollection = (collectionUrlParam) => createSelector(
  [selectShopPageCollections],
  (collections) => collections[collectionUrlParam]
)
