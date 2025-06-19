export type User = {
  id: string;
  userName: string;
  email: string;
  password: string;
  role?: string;
};

export type UsersState = {
  list: User[];
  maxId: number;
};

export type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
};