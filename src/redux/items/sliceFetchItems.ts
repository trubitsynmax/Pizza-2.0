import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; //!redux components
import axios from "axios"; //!axios
import { TFullItems, TUrlFilter } from "../../components/types/types"; //!types
export const getPizzac = createAsyncThunk(
  "items/getPizzac",
  async (params: TUrlFilter) => {
    //!isCategory - сырная, мясная и т.д.; isAscDesc - asc or desc sort; isSort - сортировка по: цене, алфавиту и т.д.
    const { isCategory, isAscDesc, isSort } = params;
    const { data } = await axios.get(
      `https://67d43e67d2c7857431ecfd6a.mockapi.io/Pizzac?${isCategory}&${isAscDesc}&${isSort}`
    );
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
