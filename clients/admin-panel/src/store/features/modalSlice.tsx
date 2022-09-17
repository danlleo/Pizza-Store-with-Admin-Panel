import { createSlice } from '@reduxjs/toolkit'

interface IModal {
  isOpen: boolean
}

const initialState: IModal = {
  isOpen: false
}

export const modalSlice = createSlice({
  name: 'modal',
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

export const { open, close } = modalSlice.actions

export default modalSlice.reducer
