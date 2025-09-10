import { createSlice } from '@reduxjs/toolkit';
import { fetchBrands } from '../catalog/operations.js';

const brandSlice = createSlice({
  name: 'brands',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const brandReducer = brandSlice.reducer;
