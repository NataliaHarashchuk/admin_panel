import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type User = {
  id: string;
  userName: string;
  email: string;
  password: string;
  role?: string;
};

type UsersState = {
  list: User[];
};

const defaultAdmin: User = {
  id: "0",
  userName: "admin",
  email: "admin@example.com",
  password: "admin",
  role: "admin",
};

const savedUsers = JSON.parse(localStorage.getItem("users") ?? 'null') as User[] | null;

if (!savedUsers || savedUsers.length === 0) {
  localStorage.setItem("users", JSON.stringify([defaultAdmin]));
}

const initialState: UsersState = {
   list: savedUsers ?? [defaultAdmin],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.list.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.list));
    },
    deleteUser(state, action: PayloadAction<string>) {
      if (action.payload === '1') return;
      state.list = state.list.filter((user: User) => user.id !== action.payload);
      localStorage.setItem('users', JSON.stringify(state.list));
    },
    editUser(state, action: PayloadAction<User>) {
      const index = state.list.findIndex((user: User) => user.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
        localStorage.setItem("users", JSON.stringify(state.list));
      }
    },
  },
});

export const { addUser, deleteUser, editUser } = usersSlice.actions;
export default usersSlice.reducer;
