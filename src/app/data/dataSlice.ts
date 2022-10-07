import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Comment } from '../types';

const initialState: Comment[] = [];

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<Comment>) => {
      state.push(action.payload);
    },
  },
});

export const { addComment } = commentSlice.actions;

export default commentSlice.reducer;
