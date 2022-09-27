import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface ItemsState {
  entities: []
  loading: boolean
  error: boolean
}

const initialState = {
  entities: [],
  loading: false,
  error: false
} as ItemsState

export const getAll = createAsyncThunk('items/getAll', async () => {
  const { data } = await axios.get('https://fakestoreapi.com/products')

  return data
})

export const getByCategory = createAsyncThunk(
  'items/getByCategory',
  async (category: string) => {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    )

    return data
  }
)

const itemsSlice = createSlice({
  name: 'itemsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, (state) => {
        state.loading = true
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.loading = false
        state.entities = action.payload
        state.error = false
      })
      .addCase(getAll.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      .addCase(getByCategory.pending, (state) => {
        state.loading = true
      })
      .addCase(getByCategory.fulfilled, (state, action) => {
        state.loading = false
        state.entities = action.payload
        state.error = false
      })
      .addCase(getByCategory.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  }
})

export default itemsSlice.reducer
