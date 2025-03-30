import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TItemsPizza } from "../types";

type TLink = {
  isCategory: string;
  isAscDesc: string;
  isSort: string;
};

export const getPizzac = createAsyncThunk(
  "items/getPizzac",
  async (params: TLink) => {
    const { isCategory, isAscDesc, isSort } = params;
    const { data } = await axios.get(
      `https://67d43e67d2c7857431ecfd6a.mockapi.io/Pizzac?${isCategory}&${isAscDesc}&${isSort}`
    );
    return data;
  }
);

const initialState = {
  items: [] as TItemsPizza[],
  status: "pending" as "pending" | "fulfilled" | "rejected",
};

export const fetchItems = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPizzac.pending, (state) => {
      state.items = [];
      state.status = "pending";
    });
    builder.addCase(getPizzac.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(getPizzac.rejected, (state) => {
      state.items = [];
      state.status = "rejected";
    });
  },
});

export default fetchItems.reducer;
