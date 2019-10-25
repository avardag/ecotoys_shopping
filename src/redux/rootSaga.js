import { all, call } from "redux-saga/effects";

// all() Creates an Effect description that instructs the middleware to run multiple Effects in parallel and wait for all of them to complete.
// It's quite the corresponding API to standard Promise#all.

import { fetchCollectionsStart } from './shopPage/shopPageSagas';
import { userSagas } from "./user/userSagas";

//rootSaga to be used in store.js as arg to a function sagaMiddleware.run()
export default function* rootSaga(){
  yield all(
    [
      call(fetchCollectionsStart),
      call(userSagas)
    ]
  )
}