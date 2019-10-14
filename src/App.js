import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/ShopPage';
import Header from './components/Header/Header';
import SignInRegister from './pages/SignInRegister/SignInRegister';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        
        <Route path="/signin" component={SignInRegister}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/" component={Homepage} exact />

      </Switch>
    </div>
  );
}

export default App;
