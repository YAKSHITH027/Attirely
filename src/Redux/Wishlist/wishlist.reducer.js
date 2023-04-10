import * as types from './wishlist.types'
const initialState = {
  wishlist: [],
  isLoading: false,
  isError: false,
}
const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.WISHLIST_REQUEST: {
      return { ...state, isLoading: true }
    }
    case types.WISHLIST_ERROR: {
      return { ...state, isLoading: false }
    }
    case types.WISHLIST_SUCCESS:
      return { ...state, wishlist: payload, isLoading: false }

    case types.WISHLIST_ADD_SUCCESS: {
      return {
        ...state,
        wishlist: [...state.wishlist, payload],
        isLoading: false,
      }
    }
    case types.WISHLIST_REMOVE_SUCCESS: {
      console.log(payload)
      return {
        ...state,
        isLoading: false,
        wishlist: state.wishlist.filter((item) => item.id != payload.productId),
      }
    }

    default:
      return state
  }
}

export { reducer }
