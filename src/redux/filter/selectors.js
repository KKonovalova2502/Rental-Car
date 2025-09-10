export const selectBrand = (state) => state.filter.brand;
export const selectRentalPrice = (state) => state.filter.rentalPrice;
export const selectMinMileage = (state) => state.filter.minMileage;
export const selectMaxMileage = (state) => state.filter.maxMileage;

export const selectAllFilters = (state) => ({
  brand: state.filter.brand,
  rentalPrice: state.filter.rentalPrice,
  minMileage: state.filter.minMileage,
  maxMileage: state.filter.maxMileage,
});
