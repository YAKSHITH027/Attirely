import { addToCartApi, cartAPI } from "./cart.api";
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


export const getCart =
  (id = 4) =>
  async (dispatch) => {
    dispatch(cartRequest());
    try {
      let res = await cartAPI(id);
      dispatch(CartSuccess(res));
      
    } catch (error) {
      console.log(error);
      dispatch(cartError());
    }
  };


  export const addcart =
  (id = 4 ,cartData) =>
  async (dispatch) => {
    dispatch(cartRequest());
    try {
      let res = await addToCartApi(id,cartData);
      dispatch(Cartdelet(cartData));
      // console.log("cart", res);
    } catch (error) {
      console.log(error);
      dispatch(cartError());
    }
  };

