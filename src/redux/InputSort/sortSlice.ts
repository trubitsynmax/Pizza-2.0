import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type fetchUrl = {
  filter: number;
  order: string;
  sort: {
    name: string;
    sortCategory: string;
  };
};

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
    selectAscDesc(state, action: PayloadAction<string>) {
      state.AscDesc = Boolean(action.payload);
    },
    selectSort(state, action) {
      state.sortName = action.payload;
    },
    selectFetch(state, action: PayloadAction<fetchUrl>) {
      state.categoryId = action.payload.filter;
      if (action.payload.order == "true") {
        state.AscDesc = true;
      } else {
        state.AscDesc = false;
      }
      state.sortName = action.payload.sort;
    },
  },
});

export const {
  selectInput,
  selectCategory,
  selectAscDesc,
  selectSort,
  selectFetch,
} = inputSort.actions;
export default inputSort.reducer;
