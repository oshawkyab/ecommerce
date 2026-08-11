import type { TCategory, TError, TLoading } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";
import getCategories from "./thunk/getCategories";


interface ICategoriesSlice {
   records: TCategory[];
   loading: TLoading,
   error: TError
}

const initialState: ICategoriesSlice = {
   records: [],
   loading: "idle",
   error: null
}

const categoriesSlice = createSlice({
   name: "categories",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      // pending case
      builder.addCase(getCategories.pending, (state) => {
         state.error = null;
         state.loading = "pending"
      })
      // rejected case
      builder.addCase(getCategories.rejected, (state, action) => {
         state.loading = "failed"
         if (action.payload && typeof action.payload === "string") {
            state.error = action.payload
         }
      })
      // fulfilled case
      builder.addCase(getCategories.fulfilled, (state, action) => {
         state.error = null;
         state.loading = "succeeded";
         state.records = action.payload
      })
   }
})

export { getCategories }
export default categoriesSlice.reducer