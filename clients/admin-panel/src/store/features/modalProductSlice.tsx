import { createSlice } from '@reduxjs/toolkit'

interface IModal {
  isOpen: boolean
}

const initialState: IModal = {
  isOpen: false
}

export const modalProductSlice = createSlice({
  name: 'modalProducts',
  initialState,
  reducers: {
    openProductModal: (state) => {
      state.isOpen = true
    },
    closeProductModal: (state) => {
      state.isOpen = false
    }
  }
})

export const { openProductModal, closeProductModal } = modalProductSlice.actions

export default modalProductSlice.reducer
