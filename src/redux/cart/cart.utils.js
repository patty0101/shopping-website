// utility functions allow us to keep our files clean and organize functions that we may need in multiple files in one location.
// cartItemToAdd is a object. cartItems is a list of object.
export const addItemToCart = (cartItems,cartItemToAdd) => {
    //  to find if there have existing item in the state
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
// 如果已经有item在现在的state里，则在相同的item数量上加1
    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? {...cartItem,quantity:cartItem.quantity + 1}
            : cartItem)
    }
    //  if cartItemToAdd new, which means there is no has been added in the cartitems,
    //  add new item and quantity property gets attached the first time around since it's a new item.
    //  below is {...cartItemToAdd,quantity:1} not {cartItemToAdd,quantity:1}
    return [...cartItems, {...cartItemToAdd,quantity:1}]
    
}

//  to remove items in chekout page
export const removeItemFromCart =(cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );
    // if the existing item quantity is 1, just remove the item from the cartitems
    if (existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    // else minus the quantity by 1
    return cartItems.map(cartItem => (
        cartItem.id === cartItemToRemove.id ?
        {...cartItem, quantity:cartItem.quantity -1}
        :
        cartItem
    ))
}