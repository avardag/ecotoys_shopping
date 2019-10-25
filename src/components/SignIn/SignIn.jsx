import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from '../FormInput/FormInput';
import CustomBtn from '../CustomBtn/CustomBtn';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
//redux actions
import { googleSigninStart } from '../../redux/user/userActions';
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

  handleSubmit = async (e) =>{
    e.preventDefault();

    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      //clear fields
      this.setState({
        email: '',
        password: '',
      })
    } catch (error) {
      console.log(error)
    }

  }
  render() {
    const {email, password} = this.state;
    const {googleSigninStart} = this.props;
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
              type="button"
              onClick={googleSigninStart}
              isGoogleSignIn
            >Sign in with Google</CustomBtn>

          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, {googleSigninStart})(SignIn);