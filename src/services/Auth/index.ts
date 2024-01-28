import { LoginPayload } from '@definitions';
import { httpJsonClient } from '../httpClients';
import { ILoginResponse } from './types';

export const AuthService = {
  login: (data: LoginPayload) => {
    return httpJsonClient.post<LoginPayload, ILoginResponse>('/api/auth/login', data);
  },
};
