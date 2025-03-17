import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TItemsPizza } from "../types";
import { ComparisonObj } from "../types";
const initialState = {
  items: [] as TItemsPizza[],
};

export const getItems = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<TItemsPizza>) {
      const findItem = state.items.find((obj) => obj.id == action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
    },
    minusItem(state, action: PayloadAction<ComparisonObj>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem && findItem.count > 1) {
        findItem.count--;
      } else {
        state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      }
    },
  },
});

export const { addItem, minusItem } = getItems.actions;
export default getItems.reducer;
