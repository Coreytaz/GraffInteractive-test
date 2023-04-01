import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Ships } from "../../types/types";
import { FilterSliceState } from "../../../pages/index/filtersSlice";

interface ShipsSliceType {
  ships: Ships | null;
  status: string | null;
  error: unknown;
}

const initialState: ShipsSliceType = {
  ships: null,
  status: null,
  error: null,
};

export const getShipsProduct = createAsyncThunk<
  Ships,
  {
    query: {
      home_port?: { $in: string[] } | undefined;
      type?: { $in: string[] } | undefined;
      $text?: { $search: string } | undefined;
    };
  },
  { state: { filterSlice: FilterSliceState } }
>("ships/get-ships-product", async function (body, { rejectWithValue }) {
  try {
    const response = await fetch("https://api.spacexdata.com/v4/ships/query", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: Ships = await response.json();
    return data;
  } catch (error: unknown) {
    return rejectWithValue(error);
  }
});

export const ShipsSlice = createSlice({
  name: "Ships",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getShipsProduct.pending, (state) => {
      state.status = "loading";
      state.ships = null;
    });
    builder.addCase(getShipsProduct.fulfilled, (state, action) => {
      state.status = "resolved";
      state.ships = action.payload;
    });
    builder.addCase(getShipsProduct.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
      state.ships = null;
    });
  },
});

export const cartActions = ShipsSlice.actions;

export default ShipsSlice.reducer;
