import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TItemsPizza } from "./FetchItems";
const initialState = {
  items: [] as TItemsPizza[],
  count: 0,
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
  },
});

export const { addItem } = getItems.actions;
export default getItems.reducer;
