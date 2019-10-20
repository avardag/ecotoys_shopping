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
//remove one piece of item from cart (i.e decrease quantity)
export const removeItem = (item)=>({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item
})

//remove whole item from cart
export const clearItemFromCart = (item)=>({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
})