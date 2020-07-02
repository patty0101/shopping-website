//  add middleware to our store so that whenever actions get fired or dispatched we can catch them and then display them.
//  and middlewares which is the peace in the middle between our ations firing and our root reducer
//  are pretty much just functions that receive actions in and then do something with them and then pass out into root reducer


//  the middleware is that the store is expecting from redux is going to be an array and that array 
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import rootReducer from './root-reducer';

//  we just set it as this contast and we make it an array and inside is our logger middleware
const middlewares = [logger]

//  store is function gets both a root reducer and also the return value of apply middleware
const store = createStore(rootReducer, applyMiddleware(...middlewares))


export default store
