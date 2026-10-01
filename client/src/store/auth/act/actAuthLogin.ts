import { axiosErrorHandler } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface IFormData {
   email: string;
   password: string
}
type TResponse = {
   accessToken: string;
   user: {
      id: number;
      firstName: string;
      lastName: string;
      password: string;
      email: string
   }
}
const actAuthLogin = createAsyncThunk(
   "auth/actAuthLogin",
   async (formData: IFormData, thunkAPI) => {
      const { rejectWithValue } = thunkAPI
      // if password or email not correct will enter for catch automatically
      try {
         const response = await axios.post<TResponse>("/login", formData)
         return response.data
      } catch (error) {
         return rejectWithValue(axiosErrorHandler(error))
      }
   }
)

export default actAuthLogin