import { userConstants } from "../_constants";
import { authService } from "../services";
import history from "../_helpers/history";

export const authActions = {
  login,
  register,
  confirmLogin,
};

function login(user) {
  return async (dispatch) => {
    dispatch(request());

    authService
      .login(user)
      .then((response) => {
        if (response.auth) {
          dispatch(success(response));
          localStorage.setItem("user", response.token);
          history.push("/");
        } else {
          dispatch(responseApi(response));
        }
      })
      .catch((err) => {
        dispatch(failure(err));
      });
  };

  function success(response) {
    return { type: userConstants.USERLOGINSUCCESS, payload: response };
  }
  function responseApi(response) {
    return { type: userConstants.RESPONSEAPI, payload: response };
  }
  function request() {
    return { type: userConstants.USERLOGINREQUEST };
  }
  function failure(err) {
    return { type: userConstants.USERLOGINFAILURE, err };
  }
}

function register(user) {
  return async (dispatch) => {
    dispatch(request());

    authService
      .register(user)
      .then((response) => {
        if (response.auth) {
          dispatch(success(response));
          localStorage.setItem("user", response.token);
          history.push("/");
        } else {
          dispatch(responseApi(response));
        }
      })
      .catch((err) => {
        dispatch(failure(err));
      });
  };

  function success(response) {
    return { type: userConstants.USERREGISTERSUCCESS, payload: response };
  }
  function responseApi(response) {
    return { type: userConstants.RESPONSEAPI, payload: response };
  }
  function request() {
    return { type: userConstants.USERREGISTERREQUEST };
  }
  function failure(err) {
    return { type: userConstants.USERREGISTERFAILURE, err };
  }
}

function confirmLogin(token) {
  return async (dispatch) => {
    authService
      .verifyToken(token)
      .then((res) => {
        history.push("/");
      })
      .catch((err) => {
        history.push("/auth");
      });
  };
}
