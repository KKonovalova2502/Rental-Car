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
    favoriteCars: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      if (!state.favoriteCars.includes(action.payload)) {
        state.favoriteCars.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.favoriteCars = state.favoriteCars.filter(
        (id) => id !== action.payload,
      );
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        const { items, page, totalItems, totalPages } = action.payload;

        if (page === 1) {
          state.items = items;
        } else {
          state.items.push(...items);
        }

        state.page = page;
        state.totalItems = totalItems;
        state.totalPages = totalPages;
      })
      .addCase(fetchCars.rejected, handleRejected),
});

export const { addFavorite, removeFavorite } = catalogSlice.actions;
export default catalogSlice.reducer;
