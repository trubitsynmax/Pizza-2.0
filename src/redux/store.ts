import { configureStore } from "@reduxjs/toolkit";
import fetchItems from "./fetchItems/FetchItems";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import getItems from "./fetchItems/GetItems";

export const store = configureStore({
  reducer: {
    pizza: fetchItems,
    items: getItems,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type useAppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch.withTypes<useAppDispatch>();
