import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actLikeToggle = createAsyncThunk(
   "wishlist/actLikeToggle",
   async (id:number, thunkAPI) => {
      const { rejectWithValue } = thunkAPI

      try {
         // check if the product is already in the wishlist
         const isExistedItem = await axios.get(`/wishlist?userId=1&productId=${id}`);

         if (isExistedItem.data.length > 0) {
            // Product is in wishlist, so remove it
            console.log("Hello from unlike")
            await axios.delete(`/wishlist/${isExistedItem.data[0].id}`);
            console.log("isExistedItem.data[0].id", isExistedItem.data[0].id)
            return { type: "remove", id }
         } else {
            // Product is not in wishlist, so add it
            await axios.post("/wishlist", { userId: 1, productId: id });
            return { type: "add", id }
         }

      } catch (error) {
         if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data)
         }
         return rejectWithValue("An unexpected error occurred")
      }
   }
)

export default actLikeToggle;