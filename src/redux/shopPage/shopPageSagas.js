import { takeEvery } from 'redux-saga/effects';
import shopActionTypes from './shopTypes';
// import { fetchCollectionsStart } from './shopActions';

export function* fetchCollectionsAsync(){
  yield console.log("fetchCollectionsAsync fired")
}

export function* fetchCollectionsStart(){
  //takeEvery(pattern, saga ,args)
  //sage: generator func, args : arguments to be passed to the started task)
  //takeEvery spawns a saga on each action dispatched to the Store that matches pattern.
  //takeEvery allows concurrent actions to be handled.
  yield takeEvery(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}