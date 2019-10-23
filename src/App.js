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

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/userActions';
//selectors
import { selectCurrentuser } from './redux/user/userSelectors';

class App extends React.Component {
 
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth)=>{ //auth observer of Firebase auth
      if (userAuth) { //if its not null
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{ // .onSnapshot attaches listener to snapshot changes
          this.props.setCurrentUser({
              id: snapShot.id, // prop of DocumentSnapshot that provides doc id, i.e users id
              ...snapShot.data() // returns obj with all fields of document
          })
        })

      } else {
        this.props.setCurrentUser(userAuth) // i.e currentUser == null
      }
    })
  }
  //close auth subscription when compnt unmounts
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  
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
