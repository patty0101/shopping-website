import {createSelector} from 'reselect'
//  to use collectionId map and in shop selector we're going to declare this contest which is equal to collectionId map which
// is just an object that maps the string value to the respective id, where the string value that we're getting from our url
// parameter willbe the actual prperty
//  because url PARAMETER is a string,whereas the data we want to match is a number, so the below map which is just an boject 
// where the string value goes to the id we then map
// const COLLECTION_ID_MAP = {
//     hats:1,
//     sneakers:2,
//     jackets:3,
//     womens:4,
//     mens:5
// }
const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

// convert a object with object to a array of object

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    // Object.keys gets us all of the keys of an object that we pass into it and gievw it to us in an array
    // Object.keys(collections) gets a list of keys in collections with a array
    collections => Object.keys(collections).map(key=>collections[key])
)

//  find collection.id matching the url parameter of our collectionidmap
// this is necessary because unlike other selectors, this selector needs a part of the state depending on the URL parameter!!
// export const selectCollection = collectionUrlParam => 
// createSelector(
//     [selectCollections],
//     collections => collections.find(collection=>
//         collection.id === COLLECTION_ID_MAP[collectionUrlParam ])
// )

//  after replace data.js from a list of object to an big object with key equals to each categroy
// data normalization: store lists of elements as objects instead of array!!
export const selectCollection = collectionUrlParam => 
createSelector(
    [selectCollections],
    // now the collections is the object, find object value with key equals to collectionUrlParam
    collections => collections[collectionUrlParam]
)