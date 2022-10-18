import { configureStore } from '@reduxjs/toolkit';
import commentSlice from './data/dataSlice';
import imageSlice from './data/ImageSlice';

export const store = configureStore({
  reducer: {
    comment: commentSlice,
    image: imageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
