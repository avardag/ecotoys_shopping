import { createStore, applyMiddleware, compose } from 'redux';
import {persistStore} from 'redux-persist';
//saga MW
import createSagaMiddleware from 'redux-saga';
//sagas
import { fetchCollectionsStart } from './shopPage/shopPageSagas';
//rootReducer
import rootReducer from './rootReducer';

//Creates a Redux middleware and connects the Sagas to the Redux Store
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]; //redux-logger, thunk etc.

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

// const store = createStore(rootReducer, applyMiddleware(...middleware));
const store = createStore(rootReducer, enhancer);

//Dynamically run saga. Can be used to run Sagas only after the applyMiddleware phase.
//The method returns a Task descriptor.
sagaMiddleware.run(fetchCollectionsStart)

//persist store to localStorage
const persistor = persistStore(store);

export {store, persistor};