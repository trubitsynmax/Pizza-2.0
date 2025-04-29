import { configureStore } from "@reduxjs/toolkit";
import sliceFetch from "./items/sliceFetchItems";
import sliceItems from "./items/sliceItems";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import sliceSort from "./sortItems/sliceSort";

export const store = configureStore({
  reducer: {
    pizza: sliceFetch,
    items: sliceItems,
    sort: sliceSort,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type useAppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch.withTypes<useAppDispatch>();
