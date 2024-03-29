import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import {ReactComponent as Logo} from '../../assets/puzzle(1).svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
//selectors
import { selectCurrentuser } from '../../redux/user/userSelectors';
import { selectCartHiddenDropD } from '../../redux/cart/cartSelectors';
//styled compnts
import { HeaderContainer, LogoContainerLink, OptionsContainer, OptionDiv, OptionLink } from './Header.styled'
import { signOutStart } from '../../redux/user/userActions';

const Header = ({ currentUser, hiddenDropD, signOutStart }) => {
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
          <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>
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
export default connect(mapStateToProps, {signOutStart})(Header);