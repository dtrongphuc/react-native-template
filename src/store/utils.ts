import { StoreApi, UseBoundStore } from 'zustand';

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S,
) => {
  let store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (let k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store(s => s[k as keyof typeof s]);
  }

  return store;
};

export const sliceResetFns = new Set<() => void>();

/**
 * Reset all slices.
 * If you have a specific slice like 'Theme', you should skip pushing the reset method into sliceResetFns.
 */
export const resetAllSlices = () => {
  sliceResetFns.forEach(resetFn => {
    resetFn();
  });
};
