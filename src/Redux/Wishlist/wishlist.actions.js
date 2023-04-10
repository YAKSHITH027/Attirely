import {
  addToWishlistAPI,
  removeFromWishlistAPI,
  wishlistAPI,
} from './wishlist.api'

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
const wishlistAddData = (payload) => {
  return { type: types.WISHLIST_ADD_SUCCESS, payload }
}
const wishlistRemove = (id, productId) => {
  return { type: types.WISHLIST_REMOVE_SUCCESS, payload: { id, productId } }
}

export const getWishlist = (id) => async (dispatch) => {
  if (!id) {
    return
  }
  dispatch(wishlistRequest())
  try {
    let res = await wishlistAPI(id)
    console.log(res)
    dispatch(wishlistSuccess(res))
  } catch (error) {
    console.log(error)
    dispatch(wishlistError())
  }
}

export const addToWishlist = (id, product, productId) => async (dispatch) => {
  dispatch(wishlistRequest())
  try {
    await addToWishlistAPI(id, product, productId)

    dispatch(wishlistAddData(product))
  } catch (error) {
    dispatch(wishlistError())
  }
}
export const removeFromWishlist = (id, productId) => async (dispatch) => {
  dispatch(wishlistRequest())
  try {
    await removeFromWishlistAPI(id, productId)

    dispatch(wishlistRemove(id, productId))
  } catch (error) {
    dispatch(wishlistError())
  }
}
