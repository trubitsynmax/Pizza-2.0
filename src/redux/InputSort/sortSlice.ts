import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  inputValue: "",
  categoryId: 0,
  AscDesc: true,
  sortName: {
    name: "популярности",
    sortCategory: "rating",
  },
};

export const inputSort = createSlice({
  name: "sort",
  initialState,
  reducers: {
    selectInput(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
    selectCategory(state, action) {
      state.categoryId = action.payload;
    },
    selectAscDesc(state, action: PayloadAction<boolean>) {
      state.AscDesc = action.payload;
    },
    selectSort(state, action) {
      state.sortName = action.payload;
    },
  },
});

export const { selectInput, selectCategory, selectAscDesc, selectSort } =
  inputSort.actions;
export default inputSort.reducer;
