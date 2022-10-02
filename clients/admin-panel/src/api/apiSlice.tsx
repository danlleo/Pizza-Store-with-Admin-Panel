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

interface Type {
  _id: string
  type: string
  created_at: Date
  last_update: Date
  __v: number
}

export const apiSlice = createApi({
  reducerPath: 'storeItems',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pizza-store-api.herokuapp.com',
    mode: 'cors'
  }),
  tagTypes: ['FoodTypes', 'FoodItems'],
  endpoints: (builder) => ({
    getStoreItems: builder.query<Product[], void>({
      query: () => '/foods',
      providesTags: ['FoodItems']
    }),
    getStoreTypes: builder.query<Type[], void>({
      query: () => '/foodtypes',
      providesTags: ['FoodTypes']
    }),
    addStoreItem: builder.mutation<any, any>({
      query: (product) => ({
        url: '/foods',
        method: 'POST',
        body: product,
        headers: {
          accept: '*/*',
          'Content-Type': 'multipart/form, boundary=--abc--abc--'
        }
      }),
      invalidatesTags: ['FoodItems']
    }),
    removeStoreItem: builder.mutation<any, any>({
      query: (id) => ({
        url: `/foods/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['FoodItems']
    }),
    addStoreType: builder.mutation<any, any>({
      query: (type) => ({
        url: '/foodtypes',
        method: 'POST',
        body: type
      }),
      invalidatesTags: ['FoodTypes']
    }),
    removeStoreType: builder.mutation<any, any>({
      query: (id) => ({
        url: `/foodtypes/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['FoodTypes']
    })
  })
})

export const {
  useGetStoreItemsQuery,
  useGetStoreTypesQuery,
  useAddStoreItemMutation,
  useAddStoreTypeMutation,
  useRemoveStoreTypeMutation,
  useRemoveStoreItemMutation
} = apiSlice
