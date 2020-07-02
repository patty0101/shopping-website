import {CartActionTypes} from './cart.types'
import {addItemToCart} from './cart.utils'
import {removeItemFromCart} from './cart.utils'


const INITIAL_STATE = {
    hidden:true,
    cartItems:[]
}

const cartReducer = (state =INITIAL_STATE,action) => {
    switch(action.type){
        // hide or show the cart dropdown 
        case CartActionTypes.TOGGLE_CART_HIDDEN:
        return {
            ...state,
            hidden:!state.hidden
        }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                // ...state.carItems means spread in the existing cart items that are already on our state
                // and deposit whatever the item it is in the payload of that action into
                // cartItems: [...state.cartItems,action.payload]
                // addItemToCart(cartItems,cartItemToAdd)
                // addItemToCart is a function, to add quantity for each items!
                cartItems:addItemToCart(state.cartItems,action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems:removeItemFromCart(state.cartItems, action.payload)
            }
            // move items in the check out page
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                // below is state.cartItems! not cartItems
                cartItems:state.cartItems.filter(
                    cartItem=> cartItem.id !== action.payload.id
                    )
            }
        default:
            return state

    }
}
export default cartReducer