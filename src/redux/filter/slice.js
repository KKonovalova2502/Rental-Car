import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: '',
  rentalPrice: '',
  minMileage: '',
  maxMileage: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      const { brand, rentalPrice, minMileage, maxMileage } = action.payload;
      state.brand = brand;
      state.rentalPrice = rentalPrice;
      state.minMileage = minMileage;
      state.maxMileage = maxMileage;
    },
    clearFilters: () => initialState,
  },
});

export const { setFilters, clearFilters } = filterSlice.actions;

export default filterSlice.reducer;
