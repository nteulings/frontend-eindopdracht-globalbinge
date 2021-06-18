import React from "react";
import './App.css';
import TopMenu from '../src/components/TopMenu'
import About from "./Pages/About";
import Countries from './Pages/Countries';
import Login from './Pages/Login';
import HomePage from "./Pages/HomePage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

function App() {
  return (
      <Router>
          <TopMenu />

          <Switch>
              <Route exact path="/">
                  <HomePage />
              </Route>
              <Route path="/about">
                  <About />
              </Route>
              <Route path="/countries">
                  <Countries />
              </Route>
              <Route path="/login">
                  <Login />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
