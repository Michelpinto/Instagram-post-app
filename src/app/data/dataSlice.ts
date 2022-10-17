import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '../store';
import { Comment } from '../types';
const axios = require('axios');
const API_URL = 'https://picsum.photos/v2/list?page=2&limit=6';

export const imageSlice = createSlice({
  name: 'data',
  initialState: {
    images: [],
  },
  reducers: {
    setImages: (state, action: PayloadAction<[]>) => {
      state.images = action.payload;
    },
  },
});

export const { setImages } = imageSlice.actions;

export const getImages = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(API_URL);
    dispatch(setImages(response.data));
  } catch (error) {
    console.log(error);
  }
};

const initialState: Comment[] = [];

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<Comment>) => {
      state.push(action.payload);
    },

    deleteComment: (state, action: PayloadAction<string>) => {
      return state.filter((comment) => comment.id !== action.payload);
    },
  },
});

export const addComment =
  (text: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    const newComment: Comment = {
      id: Math.random().toString(36).substring(2, 9),
      text: text,
    };
    dispatch(commentSlice.actions.addComment(newComment));
  };

export const deleteComment =
  (id: string): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(commentSlice.actions.deleteComment(id));
  };

export default commentSlice.reducer;
