import { configureStore } from '@reduxjs/toolkit'
import loggedInSliceReducer from './slices/loggedInSlice'

export const store = configureStore({
  reducer: {
    loggedIn: loggedInSliceReducer
  }
})
