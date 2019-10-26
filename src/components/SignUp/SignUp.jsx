import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomBtn from '../CustomBtn/CustomBtn';
import { connect } from 'react-redux';

import { signUpStart } from '../../redux/user/userActions';

import './SignUp.styles.scss';

const SignUp =({signUpStart})=> {
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password : '',
    confirmPassword: '',
  })
  
  const handleChange = (e)=>{
    const {value, name} = e.target;
    setCredentials({...userCredentials, [name]: value})
  }

  const { displayName, email, password, confirmPassword } = userCredentials;
  
  const handleSubmit = async (event) =>{
    event.preventDefault();


    if(password !== confirmPassword){
      //TODO better err UI
      alert("passwords don't match");
      return
    }
    signUpStart({
      displayName,
      email,
      password
    })


  }

  
    return (
      <div className="SignUp">
        <h2 className="title">I do not have account</h2>
        <span>Sign up with email and password</span>

        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            label="Display Name"
            required
          />

          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label="Email"
            required
          />

          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label="Password"
            required
          />

          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label="Confirm Password"
            required
          />


          <CustomBtn type='submit'>Sign me up!</CustomBtn>
        </form>
      </div>
    );
  
}

export default connect(null, {signUpStart})(SignUp);