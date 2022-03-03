import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import Profile from "../pages/Profile";

export default function index() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}
