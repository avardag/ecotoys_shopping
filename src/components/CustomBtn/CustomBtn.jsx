import React from 'react';

import './CustomBtn.styles.scss';

const CustomBtn = ({ children, ...restProps }) => (
  <button className="CustomBtn" {...restProps}>
    {children}
  </button>
);


export default CustomBtn;