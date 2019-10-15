import React from 'react';

import './CustomBtn.styles.scss';

const CustomBtn = ({ children, isGoogleSignIn, ...restProps }) => (
  <button 
    className={`${isGoogleSignIn ? 'google-sign-in' : '' } CustomBtn`}
    {...restProps}
  >
    {children}
  </button>
);


export default CustomBtn;