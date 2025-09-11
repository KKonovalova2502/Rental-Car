import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations.js';

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload || action.error.message;
};

const catalogSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    page: 1,
    perPage: 12,
    totalItems: 0,
    totalPages: 0,
    loading: false,
    error: null,
  },
  reducers: {
    clearCars: (state) => {
      state.items = [];
      state.page = 1;
      state.totalItems = 0;
      state.totalPages = 0;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        const { cars, page, totalCars, totalPages } = action.payload;

        if (page === 1) {
          state.items = cars;
        } else {
          state.items.push(...cars);
        }

        state.page = page;
        state.totalItems = totalCars;
        state.totalPages = totalPages;
      })
      .addCase(fetchCars.rejected, handleRejected),
});

export const { clearCars } = catalogSlice.actions;
export default catalogSlice.reducer;
