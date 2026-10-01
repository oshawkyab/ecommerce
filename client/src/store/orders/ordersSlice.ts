import type { TError, TLoading, TOrderItem } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";

interface IOrdersState {
   orderList: TOrderItem[];
   loading: TLoading;
   error: TError
}

const initialState: IOrdersState = {
   orderList: [],
   loading: "idle",
   error: null
}

const ordersSlice = createSlice({
   name: "orders",
   initialState,
   reducers: {}
})

export default ordersSlice.reducer