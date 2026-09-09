import type { RootState } from "@/store";
import { axiosErrorHandler } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actGetProductsById = createAsyncThunk(
   "cart/getProductsById",
   async (_, thunkAPI) => {
      const { getState, rejectWithValue, fulfillWithValue, signal } = thunkAPI
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
         const response = await axios.get(`/products?${concatendatedIds}`, { signal })
         return response.data
      } catch (error) {
         return rejectWithValue(axiosErrorHandler(error))
      }
   }
)