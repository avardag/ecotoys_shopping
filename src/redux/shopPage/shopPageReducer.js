import shopActionTypes from './shopTypes';

import SHOP_DATA from './shopData';

const INITIAL_STATE = {
  collections: SHOP_DATA
};

const shopPageReducer = (state=INITIAL_STATE, action)=>{
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state;
  }
}

export default shopPageReducer;