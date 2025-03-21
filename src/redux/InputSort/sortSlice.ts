import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  inputValue: "",
};

export const inputSort = createSlice({
  name: "input",
  initialState,
  reducers: {
    selectInput(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
  },
});

export const { selectInput } = inputSort.actions;
export default inputSort.reducer;
