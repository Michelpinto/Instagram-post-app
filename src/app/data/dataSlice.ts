import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  likes: number;
}

const initialState: CounterState = {
  likes: 0,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},

  extraReducers(builder) {},
});

export default dataSlice.reducer;
