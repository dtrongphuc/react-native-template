import { HomeSlice, HomeState, StateSlice } from '~store/types';
import { sliceResetFns } from '~store/utils';

const initialState: HomeState = {
  promotionBanner: false,
};

export const createHomeSlice: StateSlice<HomeSlice> = (set, get) => {
  sliceResetFns.add(() => set(() => initialState));
  return {
    ...initialState,
  };
};
