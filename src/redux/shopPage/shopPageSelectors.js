import { createSelector } from 'reselect';


const selectShopPage = state => state.shopPage;

export const selectShopPageCollections = createSelector(
  [selectShopPage],
  (shopPage) => shopPage.collections
)
//selector to turn collections obj to array
export const selectCollectionsForPreview = createSelector(
  [selectShopPageCollections],
  (collections)=> collections ? Object.keys(collections).map(key=> collections[key]) : []
)

//currying function
//gets collection from state.shopPage.collections based on url param
//to be used in mapStateToProps with argument of ownProps.match.params.collectionId
export const selectCollection = (collectionUrlParam) => createSelector(
  [selectShopPageCollections],
  (collections) => collections? collections[collectionUrlParam] : null
)

//select isFetching prop ov state.shopPage.isFetching
export const selectIsCollectionsFetching = createSelector(
  [selectShopPage],
  shopPage=> shopPage.isFetching
)

//selector checks if collections are loaded
export const selectIsCollectionsLoaded =createSelector(
  [selectShopPage],
  //state.shopPage.collections init val is null. !! returns boolean of it
  shopPage => !!shopPage.collections //returns true or false
)