import { createSlice } from '@reduxjs/toolkit'

interface ICartItem {
  title: string
  image: string
  price: number
  id: number
  quantity: number
  description: string
}

interface ICartList {
  entities: ICartItem[]
  price: number
}

interface IReduce {
  quantity: number
  price: number
}

const initialState: ICartList = {
  entities: [],
  price: 0
}

export const cartListSlice = createSlice({
  name: 'cartList',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.entities = [...state.entities, action.payload]
    },
    increase: (state, action) => {
      const index = state.entities.findIndex(
        (item) => item.id === action.payload.id
      )
      const quantity = state.entities[index].quantity

      state.entities[index].quantity = quantity + 1
    },
    decrease: (state, action) => {
      const index = state.entities.findIndex(
        (item) => item.id === action.payload.id
      )
      const quantity = state.entities[index].quantity

      state.entities[index].quantity = quantity - 1
    },
    removeFromCart: (state, action) => {
      state.entities = state.entities.filter(
        (item) => item.id !== action.payload
      )
    },
    getTotalPrice: (state) => {
      state.price = state.entities.reduce(
        (sum: number, { quantity, price }: IReduce) => sum + quantity * price,
        0
      )
    }
  }
})

export const { addToCart, increase, decrease, getTotalPrice, removeFromCart } =
  cartListSlice.actions

export default cartListSlice.reducer
