import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User, UsersState } from '../types/types.ts'

const defaultAdmin: User = {
  id: "0",
  userName: "admin",
  email: "admin@example.com",
  password: "admin123",
  role: "admin",
};

const savedUsersState = JSON.parse(localStorage.getItem("usersState") ?? 'null') as UsersState | null;

let initialState: UsersState;

if (!savedUsersState || !savedUsersState.list || savedUsersState.list.length === 0) {
  initialState = {
    list: [defaultAdmin],
    maxId: 0,
  };
  localStorage.setItem("usersState", JSON.stringify(initialState));
} else {
  const maxIdFromList = Math.max(
    ...savedUsersState.list.map(u => Number(u.id)).filter(id => !isNaN(id))
  );

  initialState = {
    list: savedUsersState.list,
    maxId: Math.max(savedUsersState.maxId || 0, maxIdFromList),
  };
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.list.push(action.payload);
      const numericId = Number(action.payload.id);
      if (!isNaN(numericId) && numericId > state.maxId) {
        state.maxId = numericId;
      }
      localStorage.setItem('usersState', JSON.stringify({
        list: state.list,
        maxId: state.maxId
      }));
    },
    deleteUser(state, action: PayloadAction<string>) {
      if (action.payload === '0') return;
      state.list = state.list.filter((user: User) => user.id !== action.payload);
      localStorage.setItem('usersState', JSON.stringify({
        list: state.list
      }));
    },
    editUser(state, action: PayloadAction<User>) {
      const index = state.list.findIndex((user: User) => user.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
        const numericId = Number(action.payload.id);
        if (!isNaN(numericId) && numericId > state.maxId) {
          state.maxId = numericId;
        }
        localStorage.setItem('usersState', JSON.stringify({
          list: state.list
        }));
      }
    },
  },
});

export const { addUser, deleteUser, editUser } = usersSlice.actions;
export default usersSlice.reducer;