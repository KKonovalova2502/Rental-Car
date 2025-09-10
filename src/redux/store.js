import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './catalog/slice.js';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import filtersReducer from './filters/slice';
import favoritesReducer from './favorites/slice';

const persistConfig = {
  key: 'rentalCar:favorites',
  storage,
};

const persistedFavoritesReducer = persistReducer(
  persistConfig,
  favoritesReducer,
);

export const store = configureStore({
  reducer: {
    cars: catalogReducer,
    // filters: filtersReducer,
    favorites: persistedFavoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
