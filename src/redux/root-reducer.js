// root reducer is the base reducer that represents all of the state of our application
// so this root reducer will end up being the actual code that combines all of our other states together
import {combineReducers } from 'redux'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

//  our full state in redux is just one big json object
export default combineReducers ({
    //  the key is that represent the individual slices of state 
    // key goes to the actual reducer that we want
    user: userReducer,
    cart: cartReducer
})