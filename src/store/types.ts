import { StateCreator } from 'zustand';
import 'zustand/middleware';
import 'zustand/middleware/immer';

export interface Credentials {
  accessToken?: string | null;
  refreshToken?: string | null;
}

export interface BaseSate {}

export interface BaseActions {}

// Slice definitions
// Auth
export interface AuthState extends BaseSate {
  isLoggedIn: boolean;
  credentials?: Credentials | null;
}

export interface AuthActions extends BaseActions {
  login: () => void;
  logout: () => void;
  setCredentials: (credentials: Credentials) => void;
}

// Home
export interface HomeState extends BaseSate {
  promotionBanner: boolean;
}

export interface HomeActions extends BaseActions {}

// ------
export type AuthSlice = AuthState & AuthActions;
export type HomeSlice = HomeState & HomeActions;

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
