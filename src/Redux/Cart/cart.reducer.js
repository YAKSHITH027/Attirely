const initialState = {
  cart: [],
  isLoading: false,
  isError: false,
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "some":
      return state;

    default:
      return state;
  }
};

export { reducer };
