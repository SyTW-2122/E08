import React from "react";
import { useDispatch, useSelector } from "react-redux";
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

export function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer.auth);

  const user = localStorage.getItem("user");
  if (user) {
    dispatch(authActions.confirmLogin(user));
  }

  return (
    <Router history={history}>
      <Navbar />
      <Route path="/auth" component={Auth} />
      <PrivateRoute exat path="/" component={Home} auth={auth} />
      <Footer />
    </Router>
  );
}
