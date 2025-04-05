import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ComparisonObj, TItemSelectionPizza } from "../types";

type getOneItem = {
  id: string;
  getSizes: number;
  label: number;
};

const initialState = {
  items: [] as TItemSelectionPizza[],
  count: 0,
  totalPrice: 0,
  localCount: 0,
};

export const getItems = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<TItemSelectionPizza>) {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.getSizes === action.payload.getSizes &&
          obj.label === action.payload.label
      );
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
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.getSizes === action.payload.getSizes &&
          obj.label === action.payload.label
      );
      if (findItem && findItem.count > 1) {
        findItem.count--;
      } else {
        state.items = state.items.filter(
          (obj) =>
            obj.id !== action.payload.id ||
            obj.getSizes !== action.payload.getSizes ||
            obj.label !== action.payload.label
        );
      }
      state.count = state.items.reduce((sum, item) => {
        return item.count + sum;
      }, 0);
      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0);
    },
    clearBasket(state) {
      state.items = [];
      state.totalPrice = 0;
      state.count = 0;
    },
    deleteGroupItems(state, action: PayloadAction<getOneItem>) {
      state.items = state.items.filter(
        (obj) =>
          obj.id !== action.payload.id ||
          obj.label !== action.payload.label ||
          obj.getSizes !== action.payload.getSizes
      );
    },
  },
});

export const { addItem, minusItem, clearBasket, deleteGroupItems } =
  getItems.actions;
export default getItems.reducer;
