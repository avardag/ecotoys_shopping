import { call, put, takeLatest } from 'redux-saga/effects';
import shopActionTypes from './shopTypes';
//firebase imports
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
//redux actions
import { fetchCollectionsSuccess, fetchCollectionsError } from "./shopActions";

export function* fetchCollectionsAsync(){
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    // .call(fn, args) ->A Generator func, or normal func which either returns a Promise as result, or any other value.
    // Creates an Effect description that instructs the MW to call the funct fn with args as arguments.
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    // put(action) -> Creates an Effect description that instructs the MW to dispatch an action to the Store.
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsError(error.message))
  }

}

export function* fetchCollectionsStart(){
  //takeEvery(pattern, saga ,args)
  //sage: generator func, args : arguments to be passed to the started task)
  //takeEvery spawns a saga on each action dispatched to the Store that matches pattern.
  //takeEvery allows concurrent actions to be handled. i.e non-blocking. regular take() is blocking
  //takeLatest() resolves latest saga , and cancels any previous saga tasks
  yield takeLatest(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}