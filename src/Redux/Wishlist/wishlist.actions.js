import { addToWishlistAPI, wishlistAPI } from './wishlist.api'

import * as types from './wishlist.types'
const wishlistRequest = () => {
  return { type: types.WISHLIST_REQUEST }
}
const wishlistError = () => {
  return { type: types.WISHLIST_ERROR }
}
const wishlistSuccess = (payload) => {
  return { type: types.WISHLIST_SUCCESS, payload }
}

const wishlistdelet = (payload) => {
  return { type: types.DELET_WISHLIST, payload }
}

export const getWishlist = (id) => async (dispatch) => {
  if (!id) {
    return
  }
  dispatch(wishlistRequest())
  try {
    let res = await wishlistAPI(id)
    dispatch(wishlistSuccess(res))
  } catch (error) {
    console.log(error)
    dispatch(wishlistError())
  }
}

export const addToWishlist = (id, item) => async (dispatch) => {
  dispatch(wishlistRequest())
  try {
    await addToWishlistAPI(id, item)

    dispatch(wishlistAddData(item))
  } catch (error) {
    dispatch(wishlistError())
  }
}
