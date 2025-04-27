import { configureStore } from "@reduxjs/toolkit"; //!redux componetns
import sliceFetch from "./items/sliceFetchItems"; //!fetch items
import sliceItems from "./items/sliceItems"; //!add, remove... items
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux"; //!redux components
import sliceSort from "./sortItems/sliceSort"; //!sort items

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
