import cartActionTypes from './cartTypes';

export const toggleCartHidden = ()=>{
  return {
    type: cartActionTypes.TOGGLE_CART_HIDDEN
  }
}

 export const addItemToCart = (item)=>{
  return {
    type: cartActionTypes.ADD_ITEM,
    payload: item
  }
}