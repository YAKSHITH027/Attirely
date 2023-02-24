import { cartAPI } from "./cart.api";
import * as types from "./cart.types";
const cartRequest = () => {
  return { type: types.CART_REQUEST };
};
const cartError = () => {
  return { type: types.CART_ERROR };
};
const CartSuccess = (payload) => {
  return { type: types.CART_SUCCESS, payload };
};

export const getCart =
  (id = 4) =>
  async (dispatch) => {
    dispatch(cartRequest());
    try {
      let res = await cartAPI(id);
      dispatch(CartSuccess(res));
      // console.log("cart", res);
    } catch (error) {
      console.log(error);
      dispatch(cartError());
    }
  };
