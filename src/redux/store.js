//  add middleware to our store so that whenever actions get fired or dispatched we can catch them and then display them.
//  and middlewares which is the peace in the middle between our ations firing and our root reducer
//  are pretty much just functions that receive actions in and then do something with them and then pass out into root reducer


//  the middleware is that the store is expecting from redux is going to be an array and that array 
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
//  what this does is it allows our brower to actually cache our store now depending on certain configuration options that we'ra going to set

import {persistStore} from 'redux-persist'
import rootReducer from './root-reducer';

//  we just set it as this contast and we make it an array and inside is our logger middleware
const middlewares = [logger]

//  store is function gets both a root reducer and also the return value of apply middleware
 export const store = createStore(rootReducer, applyMiddleware(...middlewares))
//  persistor is essentially a persisted version of our store,and using this and our store is how we will actually create our new provider that's wrapping our application.
 export const persistor= persistStore(store)

// return an object that gives both the store an the persistor
export default {store,persistor}

//  store is a combination of our rootreducer and middleware