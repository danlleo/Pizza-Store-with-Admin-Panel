import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart/CartSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})

type RootState = ReturnType<typeof store.getState>

export const selectCart = (state: RootState) => state.cart.isOpen

export default store
