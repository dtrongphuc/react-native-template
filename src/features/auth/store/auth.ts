import { AuthSlice, AuthState, Credentials, StateSlice } from '~store/types';
import { resetAllSlices, sliceResetFns } from '~store/utils';

const initialState: AuthState = {
  isLoggedIn: false,
  credentials: null,
};

export const createAuthSlice: StateSlice<AuthSlice> = (set, get) => {
  sliceResetFns.add(() => set(() => initialState));
  return {
    ...initialState,
    login: () => set(() => ({ isLoggedIn: true })),
    logout: () => resetAllSlices(),
    setCredentials: (credentials: Credentials) =>
      set(() => ({ credentials }), true),
  };
};
