import * as types from "./userAuth.types";
export const userLogin = (payload) => {
  return { type: types.USER_AUTH_GET, payload };
};
export const userLogout = () => {
  return { type: types.USER_AUTH_DELETE };
};
