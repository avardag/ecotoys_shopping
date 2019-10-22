import React from 'react';

import { CustomBtnContainer } from './CustomBtn.styled';

const CustomBtn = ({ children, ...restProps }) => (
  <CustomBtnContainer {...restProps}>
    {children}
  </CustomBtnContainer>
);


export default CustomBtn;
