import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import './cart-icon.styles.scss'

const CartIcon = ({toggleCartHidden,itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'></ShoppingIcon>
<span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    // below is ()=>dispatch(toggleCartHidden()) not dispatch(toggleCartHidden())
    //  onclick triggle toggleCartHidden, should be a function 
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
})

// const mapStateToProps = ({cart:{cartItems}}) => ({
//     // we want to add all of the values in quantity for all cartItem 
//     //  in reduce function, we would pass 0 as the initial accumulator as second parameters
//     //  the first argument is a function, it will accumulate all the number values of the quantities on all the cart items 
//     // his kind of code that gets a state as in the whole state object and then pulls off just a small portion or a slice of that state
//     // because what we're getting is we're getting the cart then the cart items and then reducing over those cart items that get a new value
//     // he object of our total state is a brand new object which means everything inside of it , all of data inside of it is brand new and that's why
//     // every time reduced gets called whatever those called will be also be brand new, even the value is the same two cart items
//     // itemCount: cartItems.reduce(
//     //     (accumalatedQuantity,cartItem)=> accumalatedQuantity+cartItem.quantity,
//     //     0
//     // )
// })
// pass our whole reducer state into the selector which then goes ok. i need to reference selectcartitems which references selectCard
// const mapStateToProps = (state) => ({
    
//     itemCount:selectCartItemsCount(state)
// })

//  replace with createStructuredSelector 
const mapStateToProps = createStructuredSelector ({
    
    itemCount:selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);