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

    case types.DELET_CART :{
      return {
        ...state,cart:payload.cartData
      }
    }  

    default:
      return state;
  }
};

export { reducer };
