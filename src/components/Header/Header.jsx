import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../assets/puzzle(1).svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
//selectors
import { selectCurrentuser } from '../../redux/user/userSelectors';
import { selectCartHiddenDropD } from '../../redux/cart/cartSelectors';
//styled compnts
import { HeaderContainer, LogoContainerLink, OptionsContainer, OptionDiv, OptionLink } from './Header.styled'

const Header = ({ currentUser, hiddenDropD }) => {
  return (
    <HeaderContainer>
      <LogoContainerLink to="/" >
        <Logo className="logo"/>
      </LogoContainerLink>

      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {
          currentUser?
          <OptionDiv onClick={()=> auth.signOut()}>SIGN OUT</OptionDiv>
          : <OptionLink to="/signin">SIGN IN</OptionLink>
        }
        <CartIcon/>
      </OptionsContainer>
      {
        hiddenDropD ? null : <CartDropdown/>
      }
    </HeaderContainer>
  );
};

// //use createStructured selector instead
// const mapStateToProps = (state)=>{
//   return {
//     currentUser: selectCurrentuser(state),
//     hiddenDropD: selectCartHiddenDropD(state),
//   }
// }

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentuser,
    hiddenDropD: selectCartHiddenDropD
  })
export default connect(mapStateToProps)(Header);