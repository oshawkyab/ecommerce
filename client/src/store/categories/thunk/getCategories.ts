import type { TCategory } from "@/utils/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const getCategories = createAsyncThunk("categories/getCategories", async (_, thunkAPI) => {
   const { rejectWithValue } = thunkAPI;
   try {
      const response = await axios.get<TCategory[]>("http://localhost:3005/categories")
      const data = response.data
      return data
   } catch (error) {
      if (axios.isAxiosError(error)) {
         return rejectWithValue(error.message)
      } else {
         return rejectWithValue("An unexpected error")
      }
   }
})

export default getCategories