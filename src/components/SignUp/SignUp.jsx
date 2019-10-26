import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomBtn from '../CustomBtn/CustomBtn';
import { connect } from 'react-redux';

import { signUpStart } from '../../redux/user/userActions';

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
    this.props.signUpStart({
      displayName,
      email,
      password
    })


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

export default connect(null, {signUpStart})(SignUp);