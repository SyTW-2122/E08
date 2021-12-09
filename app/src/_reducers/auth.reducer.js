import { userConstants } from "../_constants";

export function authReducer(state = {}, action) {
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
        response: action.payload
      };
    default:
      return state;
  }
}
