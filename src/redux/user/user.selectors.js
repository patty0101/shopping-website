import {createSelector} from 'reselect';

const selectUser = state => state.user;


// export const selectCurrentUser = createSelector(
//     // the first argument can be either an array of our input selectors, either pass all of your inputs selectors in the order that you want them to appear. for example: selectUser,selectCart
//     // and our second argument being the function that gets the return of the first selector
//     [selectUser,selectCart],
//     (user,cart)=>user.currentUser
// )

export const selectCurrentUser =createSelector(
[selectUser],
user => user.currentUser
)