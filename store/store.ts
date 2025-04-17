// lib/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Import the combined root reducer

// Configure the Redux store with the root reducer
export const store = configureStore({
  reducer: rootReducer, // Pass the combined root reducer here
  // Middleware and DevTools are automatically configured by default
});

// Infer the `RootState` type from the root reducer's state shape
export type RootState = ReturnType<typeof rootReducer>;
// Infer the `AppDispatch` type from the store's dispatch function
export type AppDispatch = typeof store.dispatch;
// Infer the `AppStore` type from the store itself (less commonly needed)
export type AppStore = typeof store;