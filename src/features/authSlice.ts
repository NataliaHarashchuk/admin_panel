import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User, AuthState} from '../types/types.ts'

const savedAuth = JSON.parse(localStorage.getItem("auth") ?? 'null') as AuthState | null;

const initialState: AuthState = savedAuth ?? {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("auth", JSON.stringify(state));
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.setItem("auth", JSON.stringify(state));
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
