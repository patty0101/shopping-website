import React from 'react';
import {Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';
import {auth} from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {ReactComponent as Logo} from '../../assets/crown.svg'

import './header.styles.scss';

const Header = ({currentUser,hidden}) => (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser?
                <div className='option' onClick={()=>auth.signOut()}> SIGN OUT</div>
                :
                <Link className='option' to='/signin'> SIGN IN</Link>
            }
            <CartIcon></CartIcon>
        </div>
        {/* cartdropdown postition is absolute relative to the whole page */}
        {
            hidden? null:<CartDropdown/>
        }
        
    </div>
)
// this naming can be anyghing but mapStateToProps is standard with redux codebases
//  state is the root  reducer
// destruct state to user and cart. and user as key to get the value inside user, with destruct user object
// const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
//     // the name of the property will be the actual property want to pass in and then the value will be the value
//     //  here state.user is the current reducer we want to pass in 
//     currentUser,
//     hidden
// })

//  replace with selector

// const mapStateToProps= state =>({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// })

//  to avoid if we have pretty much selectors ,we need doing the exact same thing much times, so we can actuaaly do is use our createstructuredselector call 
//  the createstructureselector will automatically pass all top states that we get as our mapstatetoprops props into each subsequent selector 
const mapStateToProps=  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

// connect is a higher component that gets either one of these two functions the first one is mapStateToProps
//  it's going to be the function that allows us to access the states with the state being are root reducer
export default connect(mapStateToProps)(Header);