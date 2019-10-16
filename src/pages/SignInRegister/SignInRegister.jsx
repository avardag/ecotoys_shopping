import React from 'react';

import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './SignInRegister.styles.scss';

const SignInRegister = () => {
  return (
    <div className='SignInRegister'>
      <SignIn/>
      <SignUp/>
    </div>
  );
};

export default SignInRegister;