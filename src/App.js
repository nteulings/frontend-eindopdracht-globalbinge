import React from "react";
import './App.css';
import TopMenu from '../src/components/TopMenu'
import About from "./Pages/About";
import Countries from './Pages/Countries';
import Login from './Pages/Forms/Login';
import HomePage from "./Pages/Home";
import Register from "./Pages/Forms/Register";
import Profile from "./Pages/Profile";
import Search from "./Pages/Search";
import DetailInfo from "./Pages/DetailInfo";
import LoginSuccess from "./Pages/SuccessPages/LoginSuccess";
import RegisterSuccess from "./Pages/SuccessPages/RegisterSuccess"
import ExpMovies from "./components/ExpMovies";
import SearchDetails from "./components/SearchDetails";
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
              <Route path="/registersuccess">
                  <RegisterSuccess />
              </Route>
              <Route path="/loginsuccess">
                  <LoginSuccess />
              </Route>
              <Route path="/about">
                  <About />
              </Route>
              <Route exact path="/countries">
                  <Countries />
              </Route>
              <Route exact path="/countries/:id/:name">
                  <ExpMovies />
              </Route>
              <Route exact path="/search">
                  <Search />
              </Route>
                <Route exact path="/search/:nfid/:clist">
                    <SearchDetails />
                </Route>
              <Route path="/detailinfo">
                  <DetailInfo />
              </Route>
              <Route exact path="/login">
                  <Login />
              </Route>
              <Route exact path="/register">
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
