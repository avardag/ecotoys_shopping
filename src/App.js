import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/ShopPage';


function App(props) {
  return (
    <div>
      <Switch>
        
        <Route path="/shop" component={ShopPage}/>
        <Route path="/" component={Homepage} exact />

      </Switch>
    </div>
  );
}

export default App;
