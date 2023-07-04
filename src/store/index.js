import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from './auth';

const rootReducer = combineReducers({
  auth: authSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
});
