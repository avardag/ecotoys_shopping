import { createSelector } from 'reselect';

//input selector
//function that returns piece of state
const selectCart = (state)=> state.cart;

//output selector
//returns momoized piece of state
export const selectCartItems = createSelector(
  [selectCart], //array of input selectors
  (cart)=> cart.cartItems //args are input selectors
);

//output selector
//returns momoized piece of state for expensice reduce method of array
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems)=> {
    return cartItems.reduce((acc, currItem)=> acc + currItem.quantity, 0)
  }
)