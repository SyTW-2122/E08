import React, { Component } from "react";
import { connect } from "react-redux";
import { Router } from "react-router-dom";
import { Route } from "react-router-dom";
import history from "./_helpers/history";
import { PrivateRoute } from "./components";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { Home } from "./pages";
import { Auth } from "./auth";
import "./app.css";
import { authActions } from "./_action";

function App(props) {
  const { authReducer } = props;

  const user = localStorage.getItem("user");
  if (user) {
    props.confirmLogin(user);
  }

  return (
    <Router history={history}>
      <Navbar />
      <Route path="/auth" component={Auth} />
      <PrivateRoute exat path="/" component={Home} auth={authReducer.auth} />
      <Footer />
    </Router>
  );
}

function mapStateToProps(state) {
  const { authReducer } = state;
  return { authReducer };
}

const actionCreator = {
  confirmLogin: authActions.confirmLogin,
};

const appComponent = connect(mapStateToProps, actionCreator)(App);
export { appComponent as App };
