import React from 'react';
import { Route } from 'react-router-dom';
import Splash from './components/Splash/index.js'
import Home from './components/Home/index.js';
import Authenticate from './components/Auth/Authenticate'
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Splash />
      </Route>
      <Route path="/authenticate/google">
        <Authenticate />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </div>
  );
}

export default App;
