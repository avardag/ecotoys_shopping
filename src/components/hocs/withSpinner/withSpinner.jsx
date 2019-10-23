import React from 'react';
import * as S from './withSpinner.styled';

// const withSpinner = (WrappedComponent) => {
//   const SpinnerComponent = ({isLoading, ...restProps}) => {
//     return isLoading ?
//     <S.SpinnerOverlay>
//       <S.SpinnerContainer/>
//     </S.SpinnerOverlay>
//     : <WrappedComponent {...restProps}/>
//   };

//   return SpinnerComponent;
// }

const withSpinner = (WrappedComponent) => ({isLoading, ...restProps}) => {
  return isLoading ?
  <S.SpinnerOverlay>
    <S.SpinnerContainer/>
  </S.SpinnerOverlay>
  : <WrappedComponent {...restProps}/>
};

export default withSpinner;