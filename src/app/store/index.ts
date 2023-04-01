import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { shipsApi } from "../../shared/api/product/shipsApi";
import { filterSlice } from "../../pages/index/filtersSlice";
import { ShipsSlice } from "../../shared/api/product/shipsSlice";

const rootReducer = combineReducers({
  filter: filterSlice.reducer,
  ShipsSlice: ShipsSlice.reducer,
  [shipsApi.reducerPath]: shipsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shipsApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
