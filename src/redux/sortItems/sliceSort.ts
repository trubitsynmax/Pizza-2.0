import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TSelectUrlFilter } from "../../components/types/types";

const initialState = {
  inputValue: "",
  listCategoryId: 0,
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
    //!gets user input values
    selectInput(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
    //!gets the selected category
    selectCategory(state, action) {
      state.listCategoryId = action.payload;
    },
    //!gets the selected sort (asc or desc)
    selectAscDesc(state, action: PayloadAction<boolean>) {
      state.AscDesc = Boolean(action.payload);
    },
    //!gets the selected sort
    selectSort(state, action) {
      state.sortName = action.payload;
    },
    //!sends in url filter info
    selectUrl(state, action: PayloadAction<TSelectUrlFilter>) {
      state.listCategoryId = action.payload.filter;
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
  selectUrl,
} = inputSort.actions;
export default inputSort.reducer;
