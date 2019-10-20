import SHOP_DATA from './shopData';

const INITIAL_STATE = {
  collections: SHOP_DATA
};

const shopPageReducer = (state=INITIAL_STATE, action)=>{
  switch (action.type) {
  
    default:
      return state;
  }
}

export default shopPageReducer;