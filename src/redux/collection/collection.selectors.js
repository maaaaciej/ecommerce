import { createSelector } from "reselect";


export const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  selectCollections,
  collections=>Object.keys(collections).map(key=>collections[key])
)

export const selectCollectionId = (collectionUrlParam) =>
  createSelector(selectCollections, (collections) =>collections[collectionUrlParam]
    
  );

  