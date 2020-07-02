
import {UserActionTypes} from './user.types'

// create action
export const setCurrentUser = user =>({
    //  we got to make sure that we alawys align the action creators type with the reducer type expectation in order to create the appropriate effects in our reducer
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})
