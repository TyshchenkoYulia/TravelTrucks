import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    value: 3,
  },
  reducers: {
    changeValue(state, action) {
      state.value = action.payload;
    },
    addValue(state, action) {
      state.value += action.payload;
    },
  },
});

export const { changeValue, addValue } = paginationSlice.actions;

export const paginationReducer = paginationSlice.reducer;
