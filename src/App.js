import React from 'react';
import Homepage from './pages/Homepage/Homepage';
import { Switch, Route, Link } from "react-router-dom";
import './App.css';

function CarToys(props) {
  return (
    <div>
      Car toys
    </div>
  )
}

function CarToysDetail(props){
  console.log(props)
  return(
    <div>
      <Link to="/cartoys">All car toys</Link>
      <h1>Car toys Details</h1>
      <div>
        toy number {props.match.params.cartoyId}
      </div>
    </div>
  )
}

function App(props) {
  console.log(props)
  return (
    <div>
      <Switch>
        
        <Route path="/cartoys/:cartoyId" component={CarToysDetail}/>
        <Route path="/cartoys" component={CarToys}/>
        <Route path="/" component={Homepage} exact />

      </Switch>
    </div>
  );
}

export default App;
