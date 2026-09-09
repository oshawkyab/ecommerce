import { axiosErrorHandler } from "@/utils";
import type { TProduct } from "@/utils/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetProductsByCatPrefix = createAsyncThunk("products/actGetProducts", async (prefix: string, thunkAPI) => {
   // Handle errors
   const { rejectWithValue, signal } = thunkAPI

   try {
      const response = await axios.get<TProduct[]>("/products?cat_prefix=" + prefix, {signal})
      const data = response.data
      return data
   } catch (error) {
      return rejectWithValue(axiosErrorHandler(error))
   }
})

export default actGetProductsByCatPrefix 