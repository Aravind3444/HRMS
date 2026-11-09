import { create } from 'zustand';
import { AuthUserDto } from '@hrms/shared-types';

export interface AuthState {
  user: AuthUserDto | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setUser: (user: AuthUserDto | null) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  setUser: (user) => set({ user, isAuthenticated: !!user, isLoading: false }),
  setLoading: (isLoading) => set({ isLoading }),
  logout: () => {
    // Clear cookies explicitly on client side
    document.cookie = 'hrms_access_token=; Max-Age=0; path=/;';
    document.cookie = 'hrms_refresh_token=; Max-Age=0; path=/;';
    set({ user: null, isAuthenticated: false, isLoading: false });
  },
}));
