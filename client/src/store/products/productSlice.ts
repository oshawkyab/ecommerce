import type { TError, TLoading, TProduct } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByCatPrefix from "./thunk/actGetProducts";

interface IProducts {
   records: TProduct[],
   loading: TLoading,
   error: TError
}

const initialState: IProducts = {
   records: [],
   loading: "idle",
   error: null
}

const productsSlice = createSlice({
   name: "products",
   initialState,
   reducers: {
      cleanUp: (state) => {
         state.records = []
      }
   },
   extraReducers: (builder) => {
      // Pending case
      builder.addCase(actGetProductsByCatPrefix.pending, (state) => {
         state.error = null
         state.loading = "pending"
      })
      // Fulfilled Case
      builder.addCase(actGetProductsByCatPrefix.fulfilled, (state, action) => {
         state.error = null
         state.loading = "succeeded"
         state.records = action.payload
      })
      // Rejected Case
      builder.addCase(actGetProductsByCatPrefix.rejected, (state, action) => {
         state.loading = "failed"
         if (action.payload && typeof action.payload === "string") {
            state.error = action.payload
         }
      })
   }
})
export const { cleanUp } = productsSlice.actions
export { actGetProductsByCatPrefix }
export default productsSlice.reducer