import React from 'react';

import './CustomBtn.styles.scss';

const CustomBtn = ({ children, isGoogleSignIn, inverted, ...restProps }) => (
  <button 
    className={`${inverted ? 'inverted': ''} ${isGoogleSignIn ? 'google-sign-in' : '' } CustomBtn`}
    {...restProps}
  >
    {children}
  </button>
);


export default CustomBtn;