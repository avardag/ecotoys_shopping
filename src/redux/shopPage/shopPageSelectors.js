import { createSelector } from 'reselect';

//needed to use in url params, because url param is string, but id of collection is number
const COLLECION_ID_MAP = {
  cartoys: 1,
  educational: 2,
  babytoys: 3,
  girls: 4,
  boys: 5
};

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
  (collections) => collections.find(col => {
    return col.id === COLLECION_ID_MAP[collectionUrlParam]
  })
)
