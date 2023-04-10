import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'

import { reducer as productReducer } from './Products/products.reducer'
import { reducer as cartReducer } from './Cart/cart.reducer'
import { reducer as wishlistReducer } from './Wishlist/wishlist.reducer'
import { reducer as userAuthReducer } from './UserAuth/userAuth.reducer'
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
  productReducer,
  cartReducer,
  userAuthReducer,
  wishlistReducer,
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
