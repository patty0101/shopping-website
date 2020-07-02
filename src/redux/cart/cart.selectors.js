import {createSelector} from 'reselect'

// there are two types of selectors we can write the first type is called an input selector that doesn't use creat selector
// the second type is called an output selector that does use input selectors and create selector to build themselves
// first selector
//  what it does is it's a function that gets the whole state and just returns a slice of it one layer DB usually
const selectCart = state => state.cart;

//  the first argument is a collection so an array of input selectors
// the second argument is a function  that will return the value we want out of the selector
// it is a memorized selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)
//  the total quantity in the cart icon
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumalatedQuantity,cartItem)=> accumalatedQuantity+cartItem.quantity,
        0
    )
)
//  total money in the cart 
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumalatedQuantity,cartItem) => accumalatedQuantity + cartItem.quantity* cartItem.price,
        0
    )
)