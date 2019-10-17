import { TOGGLE_CART_HIDDEN } from './cartTypes';

const initialState = {
  hiddenDropD: true
}

const cartReducer = (state=initialState, action)=>{
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
        return {
          ...state,
          hiddenDropD: !state.hiddenDropD
        }
      break;
  
    default:
      return state;
  }
}

export default cartReducer;