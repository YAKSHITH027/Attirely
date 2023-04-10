import * as types from './wishlist.types'
const initialState = {
  wishlist: [],
  isLoading: false,
  isError: false,
}
const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.WISHLIST_SUCCESS:
      return { ...state, wishlist: payload.wishlist }

    case types.WISHLIST_ADD_SUCCESS: {
      return { ...state, wishlist: payload }
    }

    default:
      return state
  }
}

export { reducer }
