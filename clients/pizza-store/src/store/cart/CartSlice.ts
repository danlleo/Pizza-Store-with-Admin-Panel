import { createSlice } from '@reduxjs/toolkit'

interface ICart {
  isOpen: boolean
}

const initialState: ICart = {
  isOpen: false
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { open, close } = cartSlice.actions

export default cartSlice.reducer
