import itemsReducer from './features/itemsSlice'
import cartListSliceReducer from './features/cartListSlice'
import cartReducer from './features/cartSlice'
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const store = configureStore({
  reducer: {
    products: itemsReducer,
    cart: cartReducer,
    cartList: cartListSliceReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
