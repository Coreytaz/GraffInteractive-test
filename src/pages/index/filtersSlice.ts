import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterSliceState {
  search: string;
  filtersType: string;
  filtersPort: string[];
  page: number;
}

const initialState: FilterSliceState = {
  search: '',
  filtersType: '',
  filtersPort: [],
  page: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearch(state, actions: PayloadAction<string>) {
      state.search = actions.payload;
    },
    setFiltersType(state, actions: PayloadAction<string>) {
      state.filtersType = actions.payload;
    },
    setfiltersPort(state, actions: PayloadAction<string[]>) {
      state.filtersPort = actions.payload;
    },
    setPage(state, actions: PayloadAction<number>) {
      state.page = actions.payload;
    },
  },
});

export const filterAction = filterSlice.actions;

export default filterSlice.reducer;
