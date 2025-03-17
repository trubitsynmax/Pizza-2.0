import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TItemsPizza } from "../types";

export const getPizzac = createAsyncThunk("items/getPizzac", async () => {
  const { data } = await axios.get(
    "https://67d43e67d2c7857431ecfd6a.mockapi.io/Pizzac"
  );
  return data;
});

const initialState = {
  items: [] as TItemsPizza[],
  status: "pending" as "pending" | "fulfilled" | "rejected",
  count: 0,
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
