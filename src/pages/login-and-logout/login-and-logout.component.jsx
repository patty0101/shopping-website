import React from 'react';
import './login-and-logout.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component.jsx';
import SignUp from '../../components/sign-up/sign-up.component'

const SignInAndSingUpPage = () =>(
    <div className='sign-in-and-sign-up'>
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>
)
export default SignInAndSingUpPage;