import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./hocs/Layout";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";

import { Provider } from "react-redux";
import store from "./store";

import LandingPage from "./Screens/LandingPage";
import ProfilePage from "./Screens/Profilpage";
import LoginPage from "./Screens/LoginPage";
import SearchPage from "./Screens/searchPage";
import TrajetList from "./Screens/TrajetList";
import SignupPage from "./Screens/SignupPage";

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login1" component={LoginPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignupPage} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
