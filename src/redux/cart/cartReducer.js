import cartActionTypes from './cartTypes';
import { addItemToCartUtil } from './cartUtils';

const initialState = {
  hiddenDropD: true,
  cartItems: [],
}

const cartReducer = (state=initialState, action)=>{
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
        return {
          ...state,
          hiddenDropD: !state.hiddenDropD
        }
    case cartActionTypes.ADD_ITEM:
      return{
        ...state,
        cartItems: addItemToCartUtil(state.cartItems, action.payload)
        // cartItems: [...state.cartItems ,action.payload]
      }
    default:
      return state;
  }
}

export default cartReducer;