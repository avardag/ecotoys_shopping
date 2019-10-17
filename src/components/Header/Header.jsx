import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import './Header.styles.scss';
import {ReactComponent as Logo} from '../../assets/puzzle(1).svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

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

const mapStateToProps = ({user: {currentUser}, cart: {hiddenDropD}})=>{
  return {
    currentUser,
    hiddenDropD,
  }
}
export default connect(mapStateToProps)(Header);