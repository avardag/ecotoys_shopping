import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../FormInput/FormInput';
import CustomBtn from '../CustomBtn/CustomBtn';


//redux actions
import { googleSigninStart, emailSigninStart } from '../../redux/user/userActions';
import './SignIn.styles.scss'

const SignIn =({emailSigninStart, googleSigninStart})=> {
  
  const [userCredentials, setCredentials] = useState({email: '', password: ''})
  

  const {email, password} = userCredentials;
  
  const handleChange = (e) =>{
    const {value, name} = e.target;

    setCredentials({...userCredentials, [name] : value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    //dispatch action(handled by sagas)
    emailSigninStart({email, password})
    

  }
  
    return (
      <div className="SignIn">
        <h2>I already have an account</h2>
        <span>Sign in with you email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput 
            type="email" 
            name="email" 
            value={email}
            onChange={handleChange}
            label="email"
            required
            />
          
          <FormInput 
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            label='password'
            required
            />
            
          <div className="buttons">
            <CustomBtn type="submit">Sign in</CustomBtn>
            <CustomBtn 
              type="button"
              onClick={googleSigninStart}
              isGoogleSignIn
            >Sign in with Google</CustomBtn>

          </div>
        </form>
      </div>
    );
  
}

export default connect(null, {googleSigninStart, emailSigninStart})(SignIn);