import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.utils';

import './Header.styles.scss';
import {ReactComponent as Logo} from '../../assets/puzzle(1).svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
//selectors
import { selectCurrentuser } from '../../redux/user/userSelectors';
import { selectCartHiddenDropD } from '../../redux/cart/cartSelectors';

const Header = ({ currentUser, hiddenDropD }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo"/>
      </Link>

      <div className="options">
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/contact">CONTACT</Link>
        {
          currentUser?
          <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
          : <Link className="option" to="/signin">SIGN IN</Link>
        }
        <CartIcon/>
      </div>
      {
        hiddenDropD ? null : <CartDropdown/>
      }
    </div>
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