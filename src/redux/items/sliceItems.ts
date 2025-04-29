import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  TSelectItem,
  TOnlyOneItem,
  TMinusItem,
  TPlusItem,
} from "../../components/types/types";
import {
  findTrueItem,
  multiplication,
  plus,
  findFalseItem,
} from "../../components/utils/mathFunctions";
import { getItemsLS } from "../../components/utils/index"; //!get items in local storage

const { items, count, totalPrice } = getItemsLS();

const initialState = {
  items,
  changeItem: {} as TSelectItem,
  count,
  totalPrice,
  localCount: 0,
};

export const getItems = createSlice({
  name: "items",
  initialState,
  reducers: {
    //!add items in store
    addItem(state, action: PayloadAction<TPlusItem>) {
      const findItem = findTrueItem(state.items, action.payload);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.count = plus(state.items);
      state.totalPrice = multiplication(state.items);
    },
    //!remove item in store
    removeItem(state, action: PayloadAction<TMinusItem>) {
      const findItem = findTrueItem(state.items, action.payload);
      if (findItem && findItem.count > 1) {
        findItem.count--;
      } else {
        state.items = findFalseItem(state.items, action.payload);
      }
      state.count = plus(state.items);
      state.totalPrice = multiplication(state.items);
    },
    //!cleans the basket
    clearBasket(state) {
      state.items = [];
      state.totalPrice = 0;
      state.count = 0;
    },
    //!deletes the selected group items
    deleteGroupItems(state, action: PayloadAction<TOnlyOneItem>) {
      state.items = findFalseItem(state.items, action.payload);
      state.count = plus(state.items);
      state.totalPrice = multiplication(state.items);
    },
    //!selects only one item on HomePage
    selectedItem(state, action: PayloadAction<TSelectItem>) {
      state.changeItem = action.payload;
    },
    //!closes popup window
    closePopup(state) {
      state.changeItem = null;
    },
  },
});

export const {
  addItem,
  removeItem,
  clearBasket,
  deleteGroupItems,
  selectedItem,
  closePopup,
} = getItems.actions;
export default getItems.reducer;
