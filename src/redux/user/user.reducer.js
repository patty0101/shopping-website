//  a reducer is actually just a  function that gets two properities it gets a state object which 
// first is the last state of an initial state 
//  second is an action that action is just an object that has a type which is a string value,and payload
//  set the initial state of this reducer
import {UserActionTypes} from './user.types'
const INITIAL_STATE = {
    currentUser: null
}
// use initial value as what is called a default parameter value , you can pass some default value here 
//  if a state is ever undefined meaning that it's not set then it will fall back and leverage this initial state value
//  every single reducer gets every single action that ever gets fired, even if those actions are not related to this reducer
//  so the reason why we want a default return the state is because if none of the action types match inside of the switch statement
// about the ones that we care about then we just want to return the state
const userReducer = (state=INITIAL_STATE,action) => {
    // action.type is a string
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            //  return a new object which represents the new stae that our user reducer is going to transform into 
            //  and what that value will be is everything else on the state and the vlaue that we care to set
            return {
                ...state,
                currentUser: action.payload
            }
        

        default:
            return state
    }
}
export default userReducer