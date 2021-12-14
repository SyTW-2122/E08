import React, { useState } from "react";
import { Register } from "./register";
import { Login } from "./login";
import { authService } from "../services";
import "./auth.css";

export function Auth() {

  const [actualTap, setactualTap] = useState("login");

  authService.logout();

  const onHandleNavClick = (e) => {
    setactualTap(e.target.id);
  };

  return (
    <div className="authContainer">
      <div className="autenticationContaier">
        <div className="containerNavigations">
          <div
            className={
              actualTap === "login" ? "authTap tapActive" : "authTap"
            }
            id="login"
            onClick={onHandleNavClick}
          >
            Login
          </div>
          <div
            className={
              actualTap === "register"
                ? "authTap tapActive"
                : "authTap"
            }
            id="register"
            onClick={onHandleNavClick}
          >
            Register
          </div>
        </div>
        <div className="containerForm">
          {actualTap === "login" && <Login />}
          {actualTap === "register" && <Register />}
        </div>
      </div>
    </div>
  );
}
