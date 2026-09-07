import type { RootState } from "@/store";
import type { TProduct } from "@/utils/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetProductsLiked = createAsyncThunk(
   "wishlist/actGetProductsLiked",
   async (_, thunkAPI) => {

      const { rejectWithValue, getState, fulfillWithValue } = thunkAPI;
      const { wishlist } = getState() as RootState;
      const { itemsId } = wishlist;

      const queryString = itemsId.map((id) => `id=${id}`).join("&");

      try {
         const userWishlist = await axios.get<{ productId: number }[]>(`/wishlist?userId=1`)

         if (!userWishlist.data.length) {
            return fulfillWithValue([])
         }

         const response = await axios.get<TProduct[]>(`/products?${queryString}`);
         return response.data

      } catch (error) {
         if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data)
         }
         return rejectWithValue("An unexpected error occurred")
      }
   }
)

export default actGetProductsLiked;