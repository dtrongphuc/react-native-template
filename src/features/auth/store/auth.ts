import { AuthSlice, StateSlice } from '~store/types';

export const createAuthSlice: StateSlice<AuthSlice> = (set, get) => ({
  isLoggedIn: false,
  login: () => set(() => ({ isLoggedIn: true })),
  logout: () => set(() => ({ isLoggedIn: false })),
});
