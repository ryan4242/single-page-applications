import React from "react";
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Taco from './components/taco/Taco';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path='/order' >
          <Taco />
        </Route>
        <Route path='/' >
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
