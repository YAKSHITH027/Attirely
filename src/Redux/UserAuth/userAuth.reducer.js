import * as types from "./userAuth.types";
const initialState = {
  user: JSON.parse(localStorage.getItem("userInfoF")) || "",
  isLoading: false,
  isError: false,
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_AUTH_GET:
      return { ...state, user: payload };
    case types.USER_AUTH_DELETE:
      return { ...state, user: "" };

    default:
      return state;
  }
};

export { reducer };
