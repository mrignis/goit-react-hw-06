import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  term: "", // Початкове значення поля term
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.term = action.payload.term; // Оновлення поля term
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const selectNameFilter = (state) => state.filters.term;

export default filtersSlice.reducer;
