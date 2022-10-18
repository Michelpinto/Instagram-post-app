import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface ImageState {
  images: string[];
  isLoading: boolean;
}

const initialState: ImageState = {
  images: [],
  isLoading: false,
};

export const getImages = createAsyncThunk('images/getImages', async () => {
  const response = await fetch('https://picsum.photos/v2/list?page=2&limit=6');
  const res = await response.json();
  console.log(res);
  return res;
});

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getImages.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getImages.fulfilled, (state, action) => {
      state.images = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getImages.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default imageSlice.reducer;
