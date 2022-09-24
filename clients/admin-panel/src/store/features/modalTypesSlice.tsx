import { createSlice } from '@reduxjs/toolkit'

interface IModal {
  isOpen: boolean
}

const initialState: IModal = {
  isOpen: false
}

export const modalTypesSlice = createSlice({
  name: 'modalTypes',
  initialState,
  reducers: {
    openModalTypes: (state) => {
      state.isOpen = true
    },
    closeModalTypes: (state) => {
      state.isOpen = false
    }
  }
})

export const { openModalTypes, closeModalTypes } = modalTypesSlice.actions

export default modalTypesSlice.reducer
