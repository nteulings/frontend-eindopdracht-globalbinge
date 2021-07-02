import React from "react";
import './App.css';
import TopMenu from '../src/components/TopMenu'
import About from "./Pages/About";
import Countries from './Pages/Countries';
import Login from './Pages/Login';
import HomePage from "./Pages/Landingpage";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import {
    Switch,
    Route,
} from 'react-router-dom';

function App() {
  return (
      <>
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
              <Route path="/register">
                  <Register />
              </Route>
              <Route path="/profile">
                  <Profile />
              </Route>
          </Switch>
      </>
  );
}

export default App;
