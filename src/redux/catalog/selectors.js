export const selectCars = (state) => state.cars.items;
export const selectPage = (state) => state.cars.page;
export const selectTotalItems = (state) => state.cars.totalItems;
export const selectTotalPages = (state) => state.cars.totalPages;
export const selectLoading = (state) => state.cars.loading;
export const selectError = (state) => state.cars.error;
export const selectFavoriteCars = (state) => state.cars.favoriteCars;
export const selectIsFavorite = (id) => (state) =>
  state.cars.favoriteCars.includes(id);
