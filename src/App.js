import React, {useEffect} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import {connect} from "react-redux";
import { createStructuredSelector } from 'reselect';

import './App.css';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/ShopPage';
import Header from './components/Header/Header';
import SignInRegister from './pages/SignInRegister/SignInRegister';
import Checkout from './pages/Checkout/Checkout';

//selectors
import { selectCurrentuser } from './redux/user/userSelectors';
// redux actions
import { checkUserSession } from './redux/user/userActions';

const  App =({checkUserSession, currentUser}) => {

  useEffect(()=>{
    checkUserSession();

  }, [checkUserSession]) //checkUserSession will never change, so pass it to array
  
  
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/checkout" component={Checkout} exact/>
        <Route path="/signin" render={()=>
          currentUser? 
            <Redirect to='/'/>
            : <SignInRegister/>
        }/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/" component={Homepage} exact />

      </Switch>
    </div>
  );
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser
})

export default connect(mapStateToProps, {checkUserSession})(App);
