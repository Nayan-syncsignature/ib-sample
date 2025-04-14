// src/lib/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import brandConfigReducer from './slices/brandConfigSlice';

export const store = configureStore({
  reducer: {
    brandConfig: brandConfigReducer
  }
});

// Infer the `RootState`, `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;