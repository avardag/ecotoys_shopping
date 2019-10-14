import React, { Component } from 'react';

import FormInput from '../FormInput/FormInput';

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

          <input type="submit" value='Submit'/>
        </form>
      </div>
    );
  }
}

export default SignIn;