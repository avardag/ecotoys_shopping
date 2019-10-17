import {combineReducers} from 'redux';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';



// export default combineReducers({
//   user: userReducer
// });

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
  })

export default rootReducer;