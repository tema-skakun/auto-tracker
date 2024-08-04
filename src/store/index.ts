import { configureStore } from '@reduxjs/toolkit';
import deviceReducer from './slices/deviceSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    devices: deviceReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
