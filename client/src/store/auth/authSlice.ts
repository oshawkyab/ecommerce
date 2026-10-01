import type { TError, TLoading } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";
import actAuthRegister from "./act/actAuthRegister";
import actAuthLogin from "./act/actAuthLogin";

interface IAuthState {
   user: {
      id: number;
      email: string;
      firstName: string;
      lastName: string;
   } | null;
   accessToken: string | null;
   loading: TLoading;
   error: TError
}

const initialState: IAuthState = {
   loading: "idle",
   accessToken: null,
   user: null,
   error: null
}

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      resetUI: (state) => {
         state.error = null;
         state.loading = "idle"
      },
      logout: (state) => {
         state.accessToken = null
         state.user = null
         state.error = null
      }
   },
   extraReducers: (builder) => {
      // register
      builder.addCase(actAuthRegister.pending, (state) => {
         state.error = null
         state.loading = "pending"
      })
      builder.addCase(actAuthRegister.fulfilled, (state) => {
         state.loading = "succeeded"
         state.error = null
      })
      builder.addCase(actAuthRegister.rejected, (state, action) => {
         if (action.payload && typeof action.payload === "string") {
            state.error = action.payload
            state.loading = "failed"
         }
      })

      // login
      builder.addCase(actAuthLogin.pending, (state) => {
         state.error = null
         state.loading = "pending"
      })
      builder.addCase(actAuthLogin.fulfilled, (state, action) => {
         state.error = null
         state.loading = "succeeded"
         state.accessToken = action.payload.accessToken
         state.user = action.payload.user
      })
      builder.addCase(actAuthLogin.rejected, (state, action) => {
         state.loading = "failed"

         if (action.payload && typeof action.payload === "string") {
            state.error = action.payload
         }
      })
   }
})

export { actAuthRegister, actAuthLogin }
export const { resetUI, logout } = authSlice.actions
export default authSlice.reducer