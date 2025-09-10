export const selectFavoritesCars = (state) => state.favorites.items;
export const selectIsFavorite = (id) => (state) =>
  state.favorites.items.includes(id);
