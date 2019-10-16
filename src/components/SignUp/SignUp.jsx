import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomBtn from '../CustomBtn/CustomBtn';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './SignUp.styles.scss';

class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password : '',
    confirmPassword: '',
  }
  
  handleChange = (e)=>{
    const {value, name} = e.target;
    this.setState({[name]: value})
  }

  handleSubmit = async (event) =>{
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if(password !== confirmPassword){
      //TODO better err UI
      alert("passwords don't match");
      return
    }

    try {
      //use firebases auth , method to create user with email and password
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      //save newly created user to users collection n our db
      createUserProfileDocument(user, {displayName})
      //clear the form
      this.setState({
        displayName: '',
        email: '',
        password : '',
        confirmPassword: '',
      })

    } catch (error) {
      console.error(error)
    }

  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="SignUp">
        <h2 className="title">I do not have account</h2>
        <span>Sign up with email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />

          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />

          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />


          <CustomBtn type='submit'>Sign me up!</CustomBtn>
        </form>
      </div>
    );
  }
}

export default SignUp;