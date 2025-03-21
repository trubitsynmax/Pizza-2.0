import { configureStore } from "@reduxjs/toolkit";
import fetchItems from "./getSetItems/sliceFetchItems";
import getItems from "./getSetItems/sliceGetItems";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import inputSort from "./InputSort/sortSlice";

export const store = configureStore({
  reducer: {
    pizza: fetchItems,
    items: getItems,
    input: inputSort,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type useAppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch.withTypes<useAppDispatch>();
