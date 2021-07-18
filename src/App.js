import React from "react";
import './App.css';
import TopMenu from './components/topMenu/TopMenu'
import About from "./pages/about/About";
import Countries from './pages/countries/Countries';
import Login from './pages/forms/Login';
import HomePage from "./pages/Home";
import Register from "./pages/forms/Register";
import Profile from "./pages/profile/Profile";
import Search from "./pages/search/Search";
import DetailInfo from "./components/detailInfo/DetailInfo";
import LoginSuccess from "./pages/successPages/LoginSuccess";
import RegisterSuccess from "./pages/successPages/RegisterSuccess"
import ContentPerCountry from "./components/contentPerCountry/ContentPerCountry";
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
                  <ContentPerCountry />
              </Route>
              <Route exact path="/search">
                  <Search />
              </Route>
                <Route exact path="/detailinfo/:nfid/:clist">
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
