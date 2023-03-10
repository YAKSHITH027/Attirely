import * as types from "./cart.types";
const initialState = {
  cart: [],
  isLoading: false,
  isError: false,
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.CART_SUCCESS:
      return { ...state, cart: payload.cart };

    case types.CART_ADD_SUCCESS: {
      return { ...state, cart: payload };
    }
    case types.CART_QTT_CHANGE: {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id == payload.id) {
            return { ...item, qtt: payload.qtt };
          }
          return item;
        }),
      };
    }

    default:
      return state;
  }
};

export { reducer };
