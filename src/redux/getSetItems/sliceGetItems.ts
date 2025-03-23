import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TItemsPizza } from "../types";
import { ComparisonObj } from "../types";
const initialState = {
  items: [] as TItemsPizza[],
  count: 0,
  totalPrice: 0,
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
      state.count = state.items.reduce((sum, item) => {
        return item.count + sum;
      }, 0);
      state.totalPrice = state.items.reduce((sum, item) => {
        return (state.totalPrice = item.price * item.count + sum);
      }, 0);
    },
    minusItem(state, action: PayloadAction<ComparisonObj>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem && findItem.count > 1) {
        findItem.count--;
      } else {
        state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      }
      state.count = state.items.reduce((sum, item) => {
        return item.count + sum;
      }, 0);
      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0);
    },
  },
});

export const { addItem, minusItem } = getItems.actions;
export default getItems.reducer;
