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

const Cartdelet = (payload) => {
  return { type: types.DELET_CART, payload };
};

export const cartQttChange = (payload) => {
  return { type: types.CART_QTT_CHANGE, payload };
};

export const cartAddData = (payload) => {
  return { type: types.CART_ADD_SUCCESS, payload };
};

export const getCart = (id) => async (dispatch) => {
  if (!id) {
    return;
  }
  dispatch(cartRequest());
  try {
    let res = await cartAPI(id);
    dispatch(CartSuccess(res));
  } catch (error) {
    console.log(error);
    dispatch(cartError());
  }
};

export const addToCart = (id, item) => async (dispatch) => {
  dispatch(cartRequest());
  try {
    await addToCartAPI(id, item);

    dispatch(cartAddData(item));
  } catch (error) {
    dispatch(cartError());
  }
};
