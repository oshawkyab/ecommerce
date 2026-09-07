import type { RootState } from "@/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actGetProductsById = createAsyncThunk(
   "cart/getProductsById",
   async (_, thunkAPI) => {
      const { getState, rejectWithValue, fulfillWithValue } = thunkAPI
      const { cart } = getState() as RootState
      // get ids from cart items
      const ids = Object.keys(cart.items)
      // filter expression to create query string for axios request
      const concatendatedIds = ids.map((el) => `id=${el}`).join("&")

      // if we have no ids, return empty array
      if (!ids.length) {
         return fulfillWithValue([])
      }
      
      try {
         const response = await axios.get(`/products?${concatendatedIds}`)
         return response.data
      } catch (error) {
         if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data)
         }
         return rejectWithValue("An unexpected error occurred")
      }
   }
)