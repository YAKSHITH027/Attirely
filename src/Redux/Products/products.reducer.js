import * as types from "./products.types";
const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  totalCount: 0,
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case types.PRODUCT_ERROR:
      return { ...state, isLoading: false, isError: true };
    case types.PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload.data,
        totalCount: payload.totalCount,
      };
    default:
      return state;
  }
};

export { reducer };
