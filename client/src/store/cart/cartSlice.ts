import type { TLoading, TProduct } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";
import { actGetProductsById } from "./thunk/actGetProductsById";


interface ICartItems {
   items: { [key: number]: number };
   productsFullInfo: TProduct[];
   error: string | null;
   loading: TLoading
}

const initialState: ICartItems = {
   items: [],
   productsFullInfo: [],
   error: null,
   loading: "idle"
}

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addToCart: (state, action) => {
         // get id by payload
         const id = action.payload;
         // check item will add or increase
         if (state.items[id]) {
            state.items[id]++;
         } else {
            state.items[id] = 1;
         }
      },

      changeQuantity: (state, action) => {
         const { id, quantity } = action.payload;
         state.items[id] = quantity;
         console.log(`Quantity for product ID ${id} changed to ${quantity}`);
      },
      cartItemRemove: (state, action) => {
         delete state.items[action.payload];
         state.productsFullInfo = state.productsFullInfo.filter(
            (el) => el.id !== action.payload
         );
      },
      productsFullInfoCleanUp: (state) => {
         state.productsFullInfo = []
      }
   },
   extraReducers: (builder) => {
      builder.addCase(actGetProductsById.pending, (state) => {
         state.loading = "pending"
      })
      builder.addCase(actGetProductsById.fulfilled, (state, action) => {
         state.loading = "succeeded"
         state.productsFullInfo = action.payload
      })
      builder.addCase(actGetProductsById.rejected, (state, action) => {
         state.loading = "failed"
         state.error = action.error.message || "An error occurred"
      })
   }
})


export const { addToCart, changeQuantity, cartItemRemove, productsFullInfoCleanUp } = cartSlice.actions
export default cartSlice.reducer

