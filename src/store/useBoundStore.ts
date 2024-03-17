import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createAuthSlice } from '~features/auth';
import { createHomeSlice } from '~features/home';
import { CombinedState } from './types';
import { createSelectors } from './utils';

const middlewares = (f: StateCreator<CombinedState>) =>
  immer(
    devtools(
      persist(f, {
        name: 'boundStore',
        partialize: state => ({ auth: state.auth }),
      }),
    ),
  );

const useBoundStore = create<CombinedState>()(
  middlewares((...a) => ({
    auth: createAuthSlice(...a),
    home: createHomeSlice(...a),
  })),
);

export const storeSelectors = createSelectors(useBoundStore);

export default useBoundStore;
