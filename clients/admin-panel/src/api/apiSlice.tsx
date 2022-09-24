import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Nutrition {
  calories: number
  fat: number
  carbs: number
  proteins: number
  sugar: number
  salt: number
  _id?: string
}

interface Product {
  _id?: string
  name: string
  description: string
  price: number
  type: string
  image_path: string
  nutrition: Nutrition
  created_at?: Date
  last_update?: Date
  __v?: number
}

export const apiSlice = createApi({
  reducerPath: 'storeItems',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pizza-store-api.herokuapp.com',
    mode: 'cors'
  }),
  endpoints: (builder) => ({
    getStoreItems: builder.query<Product[], void>({
      query: () => '/foods'
    }),
    addStoreItem: builder.mutation<any, any>({
      query: (product) => ({
        url: '/foods',
        method: 'POST',
        body: product
      })
    })
  })
})

export const { useGetStoreItemsQuery, useAddStoreItemMutation } = apiSlice
