import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import './cart-dropdown.styles.scss'

// cartDropdown is warped by withRouter, so cartDropdown has a props name history
const CartDropdown=({cartItems,history,dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {/* will conditionally render a span or our cart items depending on whether or not the cart items array has a length that's
            greater than zero  */}

            {cartItems.length?(
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}></CartItem>
                ))
            :(
            <span className='empty-message'>Yor cart is empth</span>
            )
            }
        </div>
        <CustomButton onClick={()=>{
            // inside of onclick the function will take us to checkout page
            history.push('/checkout');
            // will close the cart drop 
            // connect actually passes dispatch into our components as a prop if we do not supply a second argument to connect!!!
            dispatch(toggleCartHidden())
        }}>
            GO TO CHECKOUT</CustomButton>
       
    </div>
)

// const mapStateToProps= (state) => {
//     cartItems: state.cart.cartItems
// }
// the return of arrow function is an object, if key and value is the same, we can short the item in object with key 
// let cat = 'Miaow';
// let dog = 'Woof';
// let bird = 'Peet peet';

// let someObject = {
//   cat,
//   dog,
//   bird
// }

// console.log(someObject);

// //{
// //  cat: "Miaow",
// //  dog: "Woof",
// //  bird: "Peet peet"
// //}

// const mapStateToProps= ({cart:{cartItems}}) => ({
//   cartItems
// })
// replace with selector
// this make sure that our cart dropdown component is not getting re rendered when ever the state changs that's unrelated to the card items
// const mapStateToProps= (state) => ({
//     cartItems:selectCartItems(state)
//   })

//  replace with createstructuredselector
const mapStateToProps= createStructuredSelector ({
    cartItems:selectCartItems
  })

//   we are going to wrap the connected function inside of our withrouter
//  the reason we can do this is because all of our higher order components return components and also take component as arguments
//  so withRouter is just taking the component that got returned from oure connect call as its component argument 
export default withRouter(connect(mapStateToProps)(CartDropdown))