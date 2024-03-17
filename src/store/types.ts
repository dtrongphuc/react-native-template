import { StateCreator } from 'zustand';
import 'zustand/middleware';
import 'zustand/middleware/immer';

// Slice definitions
export interface AuthSlice {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export interface HomeSlice {
  promotionBanner: boolean;
}

// ------
export interface CombinedState {
  auth: AuthSlice;
  home: HomeSlice;
}

export type StateSlice<T> = StateCreator<
  CombinedState,
  [['zustand/immer', never]],
  [['zustand/persist', Partial<T>]],
  T
>;
