import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, getCarById } from './operations.js';

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
    selectedCar: null,
  },
  reducers: {
    clearCars: (state) => {
      state.items = [];
      state.page = 1;
      state.totalItems = 0;
      state.totalPages = 0;
    },
    clearSelectedCar: (state) => {
      state.selectedCar = null;
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
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(getCarById.pending, handlePending)
      .addCase(getCarById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.selectedCar = action.payload;
      })
      .addCase(getCarById.rejected, handleRejected),
});

export const { clearCars, clearSelectedCar } = catalogSlice.actions;
export default catalogSlice.reducer;
