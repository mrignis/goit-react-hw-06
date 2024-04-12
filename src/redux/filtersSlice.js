import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  term: "", // Змінимо поле name на term, щоб відповідати вашому фільтру
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.term = action.payload.term; // Змінимо поле name на term
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

// Функція selectNameFilter для вибору значення поля name в фільтрах
export const selectNameFilter = (state) => state.filters.term;

export default filtersSlice.reducer;
