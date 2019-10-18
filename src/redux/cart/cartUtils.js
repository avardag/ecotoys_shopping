/**
 * Function to add items to cart, also checks if item is already in the array
 * @param {Array} cartItemsArr 
 * @param {Object} cartItemToAdd 
 */
export const addItemToCartUtil = (cartItemsArr, cartItemToAdd)=>{
  //returns first found element in Array
  const existingCartItem = cartItemsArr.find((cartItem)=>{
    return cartItem.id === cartItemToAdd.id
  })
  //check if already in array, if yes, add 1
  if(existingCartItem){
    return cartItemsArr.map(cartItem =>(
      cartItem.id === cartItemToAdd.id ?
      { ...cartItem, quantity: cartItem.quantity +1 }
      : cartItem
    ))
  }
  //if not in Array yet, will return same array concatenated with new item object. With quantity prop equal to 1
  return [ ...cartItemsArr, { ...cartItemToAdd, quantity: 1 } ]
}
