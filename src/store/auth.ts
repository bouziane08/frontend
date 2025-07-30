import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  // يمكنك إضافة خصائص أخرى حسب الحاجة
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  login: (userData) =>
    set({
      user: userData,
      isAuthenticated: true,
      loading: false,
    }),
  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
      loading: false,
    }),
}));
