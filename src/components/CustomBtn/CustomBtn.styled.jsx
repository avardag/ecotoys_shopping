import styled, {css} from 'styled-components'

const BtnStyles =css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedBtnStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover{
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInBtnStyles = css`
  background-color: #4285f4;
  color: #fff;
  border: none;

  &:hover{
    background-color: #357ae8;
    border: none;
  }
`;

//func to return some specific styles, i.e inverted, googleSignIn
const getBtnStyles = (props)=>{
  if(props.isGoogleSignIn){
    return googleSignInBtnStyles
  }

  return props.inverted? invertedBtnStyles : BtnStyles
}

//Main CustomBtn styled Component
export const CustomBtnContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 30px 0 30px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getBtnStyles}
`;