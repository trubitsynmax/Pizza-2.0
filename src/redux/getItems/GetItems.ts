import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type TItemsPizza = {
  id: string;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number[];
  rating: number;
};

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const { data } = await axios.get(
    "https://67d43e67d2c7857431ecfd6a.mockapi.io/Pizzac"
  );
  return data;
});

const initialState = {
  items: [] as TItemsPizza[],
  status: "pending" as "pending" | "fulfilled" | "rejected",
};

export const getItems = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.items = [];
      state.status = "pending";
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(fetchItems.rejected, (state) => {
      state.items = [];
      state.status = "rejected";
    });
  },
});

export default getItems.reducer;
