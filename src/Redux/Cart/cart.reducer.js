import * as types from "./cart.types";
const initialState = {
  cart: [],
  isLoading: false,
  isError: false,
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log("reducer", payload);
  switch (type) {
    case types.CART_SUCCESS:
      return { ...state, cart: payload.cart };
    case types.CART_ADD_SUCCESS: {
      return { ...state, cart: payload };
    }
    default:
      return state;
  }
};

export { reducer };
