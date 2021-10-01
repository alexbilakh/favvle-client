import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import storage from '../services/storage';

// Sign in with email
export const signinEmail = createAsyncThunk(
  '/signin',
  async (data) => {
    return await axios.post('/signin', data);
  }
);

// Sign in with Google
export const signinGoogle = createAsyncThunk(
  '/signin-google',
  async (data) => {
    return await axios.post('/signin-google', data);
  }
);

// Sign in with Facebook
export const signinFacebook = createAsyncThunk(
  '/signin-facebook',
  async (data) => {
    return await axios.post('/signin-facebook', data);
  }
);

// Sign up with email
export const signupEmail = createAsyncThunk(
  '/signup',
  async (data) => {
    return await axios.post('/signup', data);
  }
);

// Sign up with Google
export const signupGoogle = createAsyncThunk(
  '/signup',
  async (data) => {
    return await axios.post('/signup-google', data);
  }
);

// Sign up with Facebook
export const signupFacebook = createAsyncThunk(
  '/signup',
  async (data) => {
    return await axios.post('/signup-facebook', data);
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null
  },
  reducers: {},
  extraReducers: {
    [signinEmail.fulfilled]: (state, action) => {
      state.user = { email: action.payload.email };
      storage.setAuthToken(action.payload.token);
    },
    
    [signinGoogle.fulfilled]: (state, action) => {
      state.user = { email: action.payload.email };
      storage.setAuthToken(action.payload.token);
    },
    
    [signinFacebook.fulfilled]: (state, action) => {
      state.user = { email: action.payload.email };
      storage.setAuthToken(action.payload.token);
    },

    [signupEmail.fulfilled]: (state, action) => {
      state.user = { email: action.payload.email };
      storage.setAuthToken(action.payload.token);
    },

    [signupGoogle.fulfilled]: (state, action) => {
      state.user = { email: action.payload.email };
      storage.setAuthToken(action.payload.token);
    },

    [signupFacebook.fulfilled]: (state, action) => {
      state.user = { email: action.payload.email };
      storage.setAuthToken(action.payload.token);
    }
  }
});

// Action creators are generated for each case reducer function
// export const { } = authSlice.actions;

export default authSlice.reducer;