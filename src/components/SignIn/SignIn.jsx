import React, { Component } from 'react';

import FormInput from '../FormInput/FormInput';
import CustomBtn from '../CustomBtn/CustomBtn';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './SignIn.styles.scss'

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = (e) =>{
    const {value, name} = e.target;
    this.setState({[name] : value})
  }

  handleSubmit = (e) =>{
    e.preventDefault();

    console.log(this.state)

  }
  render() {
    const {email, password} = this.state;
    return (
      <div className="SignIn">
        <h2>I already have an account</h2>
        <span>Sign in with you email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type="email" 
            name="email" 
            value={email} 
            onChange={this.handleChange}
            label="email"
            required
            />
          
          <FormInput 
            type="password" 
            name="password" 
            value={password} 
            onChange={this.handleChange}
            label='password'
            required
            />
            
          <div className="buttons">
            <CustomBtn type="submit">Sign in</CustomBtn>
            <CustomBtn 
              onClick={signInWithGoogle}
              isGoogleSignIn
            >Sign in with Google</CustomBtn>

          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;