import type { TProduct } from "@/utils/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetProductsByCatPrefix = createAsyncThunk("products/actGetProducts", async (prefix:string, thunkAPI) => {
   // Handle errors
   const { rejectWithValue } = thunkAPI
   
   try {
      const response = await axios.get<TProduct[]>("http://localhost:3005/products?cat_prefix=" + prefix)
      const data =  response.data
      return data
   } catch (error) {
      if (axios.isAxiosError(error)) {
         return rejectWithValue(error.message)
      } else {
         return rejectWithValue("An unexpected error")
      }
   }
})

export default actGetProductsByCatPrefix 