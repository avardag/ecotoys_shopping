import shopActionTypes from './shopTypes';

//actions
export const fetchCollectionsStart = () =>({
  type: shopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess= (collectionsMap) =>({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})

export const fetchCollectionsError= (errMessage) =>({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: errMessage
})

// !!! moved all async functionality to redux-sagas
//action creators
//action creatorr using redux-thunk
// export const fetchCollectionsStartAsync = ()=>{
//   return function(dispatch){
//     const collectonRef = firestore.collection("collections");
//     //dispatch start action
//     dispatch(fetchCollectionsStart())
//     collectonRef
//       .get()
//       .then((snapshot)=>{
//         const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
//         // dispatch success action
//         dispatch(fetchCollectionsSuccess(collectionsMap))
//       })
//       .catch(err=>{
//         return dispatch(fetchCollectionsError(err.message))
//       })
//   }
// }