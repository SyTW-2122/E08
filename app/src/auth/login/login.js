import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../_action";

export function Login() {

  const dispatch = useDispatch();
  const responseApi = useSelector(state => state.authReducer.responseApi);
  const message = useSelector(state => state.authReducer.response.message);


  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const [alertUsername, setalertUsername] = useState(false);
  const [alertPassword, setalertPassword] = useState(false);
  const [alertResponse, setalertResponse] = useState(false);

  const authUsername = (username) => {
    if (username === "") {
      setalertUsername(true);
      return false;
    } else {
      setalertUsername(false);
      return true;
    }
  };

  const authPassword = (password) => {
    if (password === "") {
      setalertPassword(true);
      return false;
    } else {
      setalertPassword(false);
      return true;
    }
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (authUsername(Username))
      if (authPassword(Password)) {
        const userObjet = {
          username: Username,
          password: Password,
        };
        dispatch(authActions.login(userObjet));
      }

    setalertResponse(true);
  };

  return (
    <div className="formSend">
      <form action="#" onSubmit={onHandleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="usermane"
            name="usermane"
            className="form-control"
            placeholder="Username"
            value={Username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          {alertUsername && <p>The username is required</p>}
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {alertPassword && <p>The password is required</p>}
        </div>
        <button className="button-send">Login</button>
      </form>

      {responseApi && alertResponse && (
        <div>
          <span>{message}</span>
        </div>
      )}
    </div>
  );
}
