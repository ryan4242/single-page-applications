import React, {useState} from "react";
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Taco from './components/taco/Taco';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Success from './components/success/Success'

const App = () => {
  const [order, setOrder] = useState({
    name: '',
    size: '',
    avo: false,
    onions: false,
    pico: false,
    sauce: false,
    special: ''
  })

  return (
    <div>
      <Nav />
      <Switch>
      <Route path='/success' >
        <Success order={order} />
      </Route>
        <Route path='/order' >
          <Taco order={order} setOrder={setOrder} />
        </Route>
        <Route path='/' >
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
