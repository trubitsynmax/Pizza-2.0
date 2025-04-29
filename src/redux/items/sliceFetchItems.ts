import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TFullItems, TUrlFilter } from "../../components/types/types";
export const getPizzac = createAsyncThunk(
  "items/getPizzac",
  async (params: TUrlFilter) => {
    //!isCategory - сырная, мясная и т.д.; isAscDesc - asc or desc sort; isSort - сортировка по: цене, алфавиту и т.д.
    const { isCategory, isAscDesc, isSort } = params;
    const isDefaultUrl =
      isCategory === "category=0" &&
      isAscDesc === "order=asc" &&
      isSort === "sortBy=rating";
    const url = isDefaultUrl
      ? `https://67d43e67d2c7857431ecfd6a.mockapi.io/Pizzac`
      : `https://67d43e67d2c7857431ecfd6a.mockapi.io/Pizzac?${isCategory}&${isAscDesc}&${isSort}`;
    const { data } = await axios.get(url);
    return data;
  }
);

const initialState = {
  items: [] as TFullItems[],
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
