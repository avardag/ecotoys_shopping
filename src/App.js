import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/ShopPage';
import Header from './components/Header/Header';
import SignInRegister from './pages/SignInRegister/SignInRegister';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user)=>{ //auth observer of Firebase auth
      createUserProfileDocument(user)
      // this.setState({
      //   currentUser: user
      // })
    })
  }
  //close auth subscription when compnt unmounts
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          
          <Route path="/signin" component={SignInRegister}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/" component={Homepage} exact />
  
        </Switch>
      </div>
    );
  }
}

export default App;
