import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      const mockUser = {
        username: 'Kratika',
        password: 'password123',
      };

      if (username === mockUser.username && password === mockUser.password) {
        state.isAuthenticated = true;
        state.user = { username: mockUser.username };
      } else {
        alert('Invalid credentials');
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
