import { createSlice } from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle";
import actGetProductsLiked from "./act/actGetProductsLiked";
import type { TLoading, TProduct } from "@/utils/types";

interface IWishlistState {
   itemsId: number[];
   loading: TLoading
   wishlistFullInfo: TProduct[]; // Full product info for items in the wishlist
   error: null | string
}

const initialState: IWishlistState = {
   itemsId: [],
   wishlistFullInfo: [],
   loading: "idle",
   error: null
}

const wishlistSlice = createSlice({
   name: "wishlist",
   initialState,
   reducers: {
      wishlistCleanUp: (state) => {
         state.wishlistFullInfo = []
      }
   },
   extraReducers: (builder) => {
      builder.addCase(actLikeToggle.pending, (state) => {
         state.error = null
      })
      builder.addCase(actLikeToggle.fulfilled, (state, action) => {
         const { type, id } = action.payload
         if (type === "add") {
            state.itemsId.push(id)
         } else {
            state.itemsId = state.itemsId.filter(itemId => itemId !== id)
            state.wishlistFullInfo = state.wishlistFullInfo.filter(product => product.id !== id)
         }
      })
      builder.addCase(actLikeToggle.rejected, (state, action) => {
         if (action.payload && typeof action.payload === "string") {
            state.error = action.payload
         }
      })

      // get wishlist products
      builder.addCase(actGetProductsLiked.pending, (state) => {
         state.error = null
         state.loading = "pending"
      })
      builder.addCase(actGetProductsLiked.fulfilled, (state, action) => {

         state.wishlistFullInfo = action.payload
         console.log(state.wishlistFullInfo, "wishlistFullInfo")
         state.loading = "succeeded"

      })
      builder.addCase(actGetProductsLiked.rejected, (state, action) => {
         if (action.payload && typeof action.payload === "string") {
            state.error = action.payload
            state.loading = "failed"
         }
      })
   }
})

export const { wishlistCleanUp } = wishlistSlice.actions;
export default wishlistSlice.reducer;