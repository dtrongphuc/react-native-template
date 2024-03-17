import { HomeSlice, StateSlice } from '~store/types';

export const createHomeSlice: StateSlice<HomeSlice> = (set, get) => ({
  promotionBanner: false,
});
