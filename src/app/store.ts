import { configureStore } from '@reduxjs/toolkit';
import commentSlice from './data/dataSlice';

export const store = configureStore({
  reducer: {
    comment: commentSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
