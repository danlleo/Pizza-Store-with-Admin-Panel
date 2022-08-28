import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart/CartSlice'
import cartListReducer from './cart/CartListSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartList: cartListReducer
  }
})

type RootState = ReturnType<typeof store.getState>

export const selectCart = (state: RootState) => state.cart.isOpen
export const selectCartList = (state: RootState) => state.cartList.cartList

export default store
