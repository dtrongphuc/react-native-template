import { AxiosRequestConfig } from 'axios';
import { apiClient } from '~providers/ReactQuery';

export const request = async (config: AxiosRequestConfig) => {
  const response = await apiClient(config);
  return response.data;
};
