import { configureStore } from '@reduxjs/toolkit';
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
import catalogReducer from './catalog/slice.js';
import filtersReducer from './filter/slice.js';
import favoritesReducer from './favorites/slice.js';
import { brandReducer } from './brand/slice.js';

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
    filters: filtersReducer,
    favorites: persistedFavoritesReducer,
    brands: brandReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
