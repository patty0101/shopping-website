// root reducer is the base reducer that represents all of the state of our application
// so this root reducer will end up being the actual code that combines all of our other states together
import {combineReducers } from 'redux'
import {persistReducer} from 'redux-persist'
// what we get here is the actual local storage object on our window browser
// this means i want to use local storage as my default storage
//  our reducer state is pretty much just json objects. they're just large json objects which is easy to store and easy to update especially because our reduced states are just functions
// that return objects

// problems: reducer state will miss when reload or refresh page
// solution idea: in some way we could store the state of what the reducer is in and then when the app reloads we just pull it whateger we stored and then populate the reducer as such 
// solution: there is a library called redux persist allows us to do exactly that and it wires in with redux so that we don't have to worry that much about it
// the underlying tool in redux persist is local storage 
//  local storage: will persist until we clear it out. if we close our window close our browser will always have access to it.
// window.localStorage.setItem(key,JSON.stringify()),the key only accept string
// window.localStorage.getItem(key)
// window.localstorage
// session storage: persist throughout the session. as long as our tab is open even if we refresh the page we'll still have tho what we've stored in session storage.
// whereas if we close the page then we would lose whatever it is that we stored in session storage.
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'

//  this is just the json object that represents the possible configurations that we want fro redux persist to use 
const persistConfig = {
    // our key is root essentially meaning at what point inside of our reducer object do we want to start storing everything.
    key: 'root',
    // we want to pass storage in as storage, this well say the storage key goes to whatever the storage object from redux persist we're trying
    storage,
    // whitelist property is an array containing the string names of any of the reducer that we want to store
    //  here have two,user and cart,but our user is being handled by firebase authentication, so there's no reason for us to actually persist this
    whitelist:['cart']
}


// //  our full state in redux is just one big json object
// export default combineReducers ({
//     //  the key is that represent the individual slices of state 
//     // key goes to the actual reducer that we want
//     user: userReducer,
//     cart: cartReducer
// })


//  replace with persistreducer
const rootReducer = combineReducers ({
    //  the key is that represent the individual slices of state 
    // key goes to the actual reducer that we want
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

// it is a modified version of our root reducer except now with persistence acpabilities
export default persistReducer(persistConfig,rootReducer)