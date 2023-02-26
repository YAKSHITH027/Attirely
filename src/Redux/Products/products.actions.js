import axios from "axios";
import { getProductAPI } from "./products.api";
import * as types from "./products.types";

const productRequest = () => {
  console.log("hello ");
  return { type: types.PRODUCT_REQUEST };
};
const productError = () => {
  return { type: types.PRODUCT_ERROR };
};
const productSuccess = (payload) => {
  return { type: types.PRODUCT_SUCCESS, payload };
};

const getProducts = (field, params) => async (dispatch) => {
  dispatch(productRequest());
  try {
    let res = await getProductAPI(field, params);
    dispatch(productSuccess(res));
  } catch (error) {
    dispatch(productError());
  }
};

export { getProducts };
