import { axiosErrorHandler } from "@/utils";
import type { TCategory } from "@/utils/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const getCategories = createAsyncThunk("categories/getCategories", async (_, thunkAPI) => {
   const { rejectWithValue, signal } = thunkAPI;
   try {
      const response = await axios.get<TCategory[]>("/categories", { signal })
      const data = response.data
      return data
   } catch (error) {
      return rejectWithValue(axiosErrorHandler(error))
   }
})

export default getCategories