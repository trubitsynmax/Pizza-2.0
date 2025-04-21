import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ComparisonObj, TItemSelectionPizza } from "../types";

type getOneItem = {
  id: string;
  getSizes: number;
  label: number;
};

export type changeItem = {
  id: string;
  imageUrl: string;
  name: string;
  label: number;
  getSizes: number;
  price: number;
  count: number;
  info: {
    caloric: number;
    proteins: number;
    fats: number;
    carbohyd: number;
    fiber: number;
    water: number;
  };
};

export type getChangeItem = changeItem | null;

const initialState = {
  items: [] as TItemSelectionPizza[],
  changeItem: {} as getChangeItem,
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
      state.count = state.items.reduce((sum, item) => {
        return item.count + sum;
      }, 0);
      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price * item.count + sum;
      }, 0);
    },
    getChangeItem(state, action: PayloadAction<getChangeItem>) {
      state.changeItem = action.payload;
    },
    closePopup(state) {
      state.changeItem = null;
    },
  },
});

export const {
  addItem,
  minusItem,
  clearBasket,
  deleteGroupItems,
  getChangeItem,
  closePopup,
} = getItems.actions;
export default getItems.reducer;
