import React from 'react';
import './sign-up.styles.scss';


import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends React.Component {
    constructor(){
        super()

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
            
        }
    }
    handleSubmit = async event => {
        event.preventDefault()
        const {displayName,email, password, confirmPassword} = this.state
        if(password !== confirmPassword){
            alert("Passwords don't match")
            return
        }
        try{
           const {user} =await auth.createUserWithEmailAndPassword(email,password) 
        //    console.log(user.uid)
        //    把数据存到firebase里面
        // displayName is a object, and the name is the value.
          await createUserProfileDocument(user,{displayName})
        //   把数据恢复到一开始的状态，文本框里面内容清空
          this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
          })
        }catch(error){
            console.log(error)
        }
    }

    handleChange = event => {
        const {name,value} = event.target
        this.setState({
            [name]:value
        })

    }

    render(){
        const {displayName,email, password, confirmPassword} = this.state
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>  
                    <FormInput
                    type = 'text'
                    name='displayName'
                    value ={displayName}
                    handleChange={this.handleChange}
                    label='Display Name'
                    required
                    >
                    </FormInput>
                    <FormInput
                    type = 'email'
                    name='email'
                    value ={email}
                    handleChange={this.handleChange}
                    label='email'
                    required
                    >
                    </FormInput>
                    <FormInput
                    type = 'password'
                    name='password'
                    value ={password}
                    handleChange={this.handleChange}
                    label='password'
                    required
                    >
                    </FormInput>
                    <FormInput
                    type = 'password'
                    name='confirmPassword'
                    value ={confirmPassword}
                    handleChange={this.handleChange}
                    label='confirmPassword'
                    required
                    >
                    </FormInput>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp