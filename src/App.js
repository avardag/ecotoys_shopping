import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import {connect} from "react-redux";
import { createStructuredSelector } from 'reselect';

import './App.css';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/ShopPage';
import Header from './components/Header/Header';
import SignInRegister from './pages/SignInRegister/SignInRegister';
import Checkout from './pages/Checkout/Checkout';

import { setCurrentUser } from './redux/user/userActions';
//selectors
import { selectCurrentuser } from './redux/user/userSelectors';

class App extends React.Component {
 
  
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/checkout" component={Checkout} exact/>
          <Route path="/signin" render={()=>
            this.props.currentUser? 
              <Redirect to='/'/>
              : <SignInRegister/>
          }/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/" component={Homepage} exact />
  
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser
})
//mapDispatchToProps as a function
const mapDispatchToProps = (dispatch)=>{
  return { setCurrentUser: (user)=> dispatch(setCurrentUser(user)) }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

// //instead use MapDispatchToProps as an object
// export default connect(null, {setCurrentUser})(App);
