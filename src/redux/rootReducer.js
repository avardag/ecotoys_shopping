import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';

//configs from redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], //list of reducers that we want to persist in localStorage
}

// export default combineReducers({
//   user: userReducer
// });

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
  })

export default persistReducer(persistConfig, rootReducer)