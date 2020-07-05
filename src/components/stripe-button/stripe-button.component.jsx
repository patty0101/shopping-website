import React from 'react'
//  in terminal run npm install react-stripe-checkout
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    // price for cents
    const priceForStripe = price * 100
    // publish key get from streipe developer api key publish key
    //  api keys tell stripe when we upt them inside of our application that our application wants to access this account
//  the secret key is going to be the live key that we use inside of a server or a server or like service that allows us to actually make charges.
// and you can only make charges using a back end server of some kind

    const publishableKey = 'pk_test_51H1MUQLHwv5mLVE1vcIL4XyNx0OMe8ImrPVTKwKKs2ztvZ4C4lJbY8ngJFHElnAXR4ZtwMQXbktWIcA9I9KDhsTY00LBQe0PnN'


    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
    return (
        <StripeCheckout 
        label='Pay Now' 
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`You total is $ ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        ></StripeCheckout>
    )
}

export default StripeCheckoutButton