import { Tokens } from '@/types/tokens';

const ACCESS_KEY = 'accessToken';
const REFRESH_KEY = 'refreshToken';

export const getAccessToken = (): string | null => {
  return localStorage.getItem(ACCESS_KEY);
};

export const getRefreshToken = (): string | null => {
  return localStorage.getItem(REFRESH_KEY);
};

export const setTokens = (tokens: Tokens): void => {
  localStorage.setItem(ACCESS_KEY, tokens.access);
  localStorage.setItem(REFRESH_KEY, tokens.refresh);
};

export const clearTokens = (): void => {
  localStorage.removeItem(ACCESS_KEY);
  localStorage.removeItem(REFRESH_KEY);
};
