import type { RootState } from "@/store";
import { axiosErrorHandler } from "@/utils";
import type { TProduct } from "@/utils/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetProductsLiked = createAsyncThunk(
   "wishlist/actGetProductsLiked",
   async (_, thunkAPI) => {

      const { rejectWithValue, getState, fulfillWithValue, signal } = thunkAPI;
      const { wishlist } = getState() as RootState;
      const { itemsId } = wishlist;

      const queryString = itemsId.map((id) => `id=${id}`).join("&");

      try {
         const userWishlist = await axios.get<{ productId: number }[]>(`/wishlist?userId=1`, {signal})

         if (!userWishlist.data.length) {
            return fulfillWithValue([])
         }

         const response = await axios.get<TProduct[]>(`/products?${queryString}`);
         return response.data

      } catch (error) {
         return rejectWithValue(axiosErrorHandler(error))
      }
   }
)

export default actGetProductsLiked;