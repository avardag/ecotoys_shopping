import { createSelector } from 'reselect';


const selectShopPage = state => state.shopPage;

export const selectShopPageCollections = createSelector(
  [selectShopPage],
  (shopPage) => shopPage.collections
)
//selector to turn collections obj to array
export const selectCollectionsForPreview = createSelector(
  [selectShopPageCollections],
  (collections)=> Object.keys(collections).map(key=> collections[key])
)

//currying function
//gets collection from state.shopPage.collections based on url param
//to be used in mapStateToProps with argument of ownProps.match.params.collectionId
export const selectCollection = (collectionUrlParam) => createSelector(
  [selectShopPageCollections],
  (collections) => collections[collectionUrlParam]
)
