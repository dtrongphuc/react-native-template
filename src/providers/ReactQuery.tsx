import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import get from 'lodash.get';
import React, { PropsWithChildren } from 'react';
import toast from 'react-hot-toast';
import Config from 'react-native-config';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { authRefreshToken } from '~features/auth';
import { Credentials } from '~store/types';
import { storeSelectors } from '~store/useBoundStore';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
      onError(err) {
        toast.error(get(err, 'message', 'Something went wrong'));
      },
    },
    mutations: {
      onError(err) {
        toast.error(get(err, 'message', 'Something went wrong'));
      },
    },
  },
});

export const queryCache = new QueryCache();

export const apiClient = axios.create({
  baseURL: Config.BASE_URL ?? '',
  headers: {
    'Content-type': 'application/json',
  },
});

apiClient.interceptors.request.use(config => {
  const token = storeSelectors.use.auth().credentials?.accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

createAuthRefreshInterceptor(
  apiClient,
  async failedRequest => {
    const credentials = await authRefreshToken();
    const accessToken = get(credentials, 'access_token', '');

    if (accessToken) {
      failedRequest.response.config.headers.Authorization =
        'Bearer ' + accessToken;
      storeSelectors.use.auth().setCredentials(credentials as Credentials);
      return Promise.resolve(accessToken);
    } else {
      storeSelectors.use.auth().logout();
      return Promise.reject();
    }
  },
  {
    statusCodes: [401],
    pauseInstanceWhileRefreshing: true,
  },
);

const ReactQuery: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQuery;
