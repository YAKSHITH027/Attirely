import * as types from "./products.types";
const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log("types", type);
  switch (type) {
    case types.PRODUCT_REQUEST:
      console.log("came");
      return { ...state, isLoading: true };
    case types.PRODUCT_ERROR:
      return { ...state, isLoading: false, isError: true };
    case types.PRODUCT_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    default:
      return state;
  }
};

export { reducer };
