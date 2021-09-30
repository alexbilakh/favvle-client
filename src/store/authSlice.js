import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
  },
  reducers: {},
  extraReducers: {
  }
});

// Action creators are generated for each case reducer function
// export const { } = authSlice.actions;

export default authSlice.reducer;