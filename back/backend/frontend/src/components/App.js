import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./layout/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import { Provider } from "react-redux";
import store from "../store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Fragment>
              <Header />
              <div className="container">
                {/* <Dashboard /> */}
                <Login />
              </div>
            </Fragment>
            {/* <Route exact path="/" component={Dashboard} />
            <Route exact path="/login" component={Login} /> */}
            {/* <Route exact path="/signup" component={Signup} /> */}
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
