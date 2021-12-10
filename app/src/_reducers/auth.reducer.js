import { userConstants } from "../_constants";

const initialState = {
  response: {
    auth: false,
    message: '',
    token: null,
  } 
}

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.USERLOGINSUCCESS:
      return {
        ...state,
        userLoginSuccess: true,
        response: action.payload
      };
    case userConstants.USERREGISTERSUCCESS:
      return {
        ...state,
        userRegisterSuccess: true,
        response: action.payload
      };
    case userConstants.RESPONSEAPI:
      return {
        ...state,
        responseApi: true,
        response: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
