import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login/login';
import Home from "./pages/Home/home";
import Feedback from "./pages/Feedback/feedback"
import Profile from "./pages/Profile/profile"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
  <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
    </Router>
    {/* <Login />
    <Home /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
