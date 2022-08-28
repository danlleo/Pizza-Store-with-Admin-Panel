import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ICartItem {
  dishName: string
  description: string
  image: string
  amount: number
  price: number
}

interface ICartListSliceState {
  cartList: ICartItem[]
}

const initialState: ICartListSliceState = {
  cartList: []
}

export const cartListSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICartItem>) => {
      state.cartList = [
        ...state.cartList,
        {
          dishName: action.payload.dishName,
          description: action.payload.description,
          image: action.payload.image,
          amount: action.payload.amount,
          price: action.payload.price
        }
      ]
    },
    removeItem: (state, action: PayloadAction<ICartItem>) => {
      state.cartList = [
        ...state.cartList,
        {
          dishName: action.payload.dishName,
          description: action.payload.description,
          image: action.payload.image,
          amount: action.payload.amount,
          price: action.payload.price
        }
      ]
    }
  }
})

export const { addItem, removeItem } = cartListSlice.actions

export default cartListSlice.reducer
