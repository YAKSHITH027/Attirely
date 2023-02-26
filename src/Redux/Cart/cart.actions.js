import { addToCartAPI, cartAPI } from "./cart.api";
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
const cartAddData = (payload) => {
  return { type: types.CART_ADD_SUCCESS, payload };
};

export const getCart =
  (id = 4) =>
  async (dispatch) => {
    dispatch(cartRequest());
    try {
      console.log("inside getCart", id);
      let res = await cartAPI(id);
      dispatch(CartSuccess(res));
      // console.log("cart", res);
    } catch (error) {
      console.log(error);
      dispatch(cartError());
    }
  };

export const addToCart = (id, item) => async (dispatch) => {
  dispatch(cartRequest());
  try {
    await addToCartAPI(id, item);
    console.log(item);
    dispatch(cartAddData(item));
  } catch (error) {
    dispatch(cartError());
  }
};
