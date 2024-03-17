import { request } from '~utils/http';

export const authRefreshToken = async () => {
  try {
    const token: string = await request({
      url: '/auth/refresh-token',
      method: 'GET',
    });
    return token;
  } catch (error) {
    return null;
  }
};
