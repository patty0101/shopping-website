import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'
import  StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import './checkout.styles.scss';


const CheckoutPage = ({cartItems,total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span> Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
    {
        cartItems.map(cartItem=>
        <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>)
    }
    <div className='total'>
        <span>
            TOTAL: ${total}
        </span>
    </div>
    <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br/>
        4244 4242 4242 4242 - Exp: 01/20-CVV 123
    </div >
    <StripeCheckoutButton price={total} className='button'></StripeCheckoutButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    //  all the money in cart
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage) 