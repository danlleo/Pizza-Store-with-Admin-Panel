import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false
}

const loggedInSlice = createSlice({
  name: 'loggedIn',
  initialState: initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    }
  }
})

export const { setLoggedIn } = loggedInSlice.actions

export default loggedInSlice.reducer
