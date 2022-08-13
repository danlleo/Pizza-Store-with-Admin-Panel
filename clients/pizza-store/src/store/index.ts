import { configureStore } from '@reduxjs/toolkit'
// import displayReducer from './displaySlice';

const store = configureStore({
  reducer: {}
})

export default store

export type RootState = ReturnType<typeof store.getState>
