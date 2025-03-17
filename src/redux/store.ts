import { configureStore } from "@reduxjs/toolkit";
import getItem from "./getItems/getItems";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    pizza: getItem,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type useAppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch.withTypes<useAppDispatch>();
