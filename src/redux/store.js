import { createStore, applyMiddleware, compose } from 'redux';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk'

import rootReducer from './rootReducer';

const middleware = [thunk]; //redux-logger, thunk etc.

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

//persist store to localStorage
const persistor = persistStore(store);

export {store, persistor};