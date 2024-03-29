import { all, call } from "redux-saga/effects";

// all() Creates an Effect description that instructs the middleware to run multiple Effects in parallel and wait for all of them to complete.
// It's quite the corresponding API to standard Promise#all.

import { shopPageSagas } from './shopPage/shopPageSagas';
import { userSagas } from "./user/userSagas";
import { cartSagas } from "./cart/cartSagas";

//rootSaga to be used in store.js as arg to a function sagaMiddleware.run()
export default function* rootSaga(){
  yield all(
    [
      call(shopPageSagas),
      call(userSagas),
      call(cartSagas),
    ]
  )
}