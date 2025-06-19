export type User = {
  id: string;
  userName: string;
  email: string;
  password: string;
  role?: string;
};

export type UsersState = {
  list: User[];
};

export type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
};