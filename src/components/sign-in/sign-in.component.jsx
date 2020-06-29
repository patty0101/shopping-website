import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils.js'


class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email:'',
            password:''
        }
    }
    handleSubmit = async e =>{
        e.preventDefault()
        const {email, password} = this.state
        try{
            await auth.signInWithEmailAndPassword(email,password)
        }catch(err){
            console.log(err)
        }
        this.setState({email:'',password:''})
    }
    handleChange = e => {
        const {name,value} = e.target
        
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2 className='title'> I already have an account</h2>
                <span> Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}> 
                    <FormInput
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label='email'
                    required></FormInput>
                    <FormInput
                    name='password' 
                    type='password' 
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label='password'
                     required></FormInput>
                    <div className='buttons'>
                        <CustomButton type='submit' >Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in wigh Google
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;