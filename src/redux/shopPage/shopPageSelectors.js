import { createSelector } from 'reselect';

const selectShopPage = state => state.shopPage;

export const selectShopPageCollections = createSelector(
  [selectShopPage],
  (shopPage) => shopPage.collections
)
