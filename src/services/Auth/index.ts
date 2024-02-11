import { LoginPayload, RegisterPayload } from '@definitions';
import { httpJsonClient } from '../httpClients';
import { IAuthResponse } from './types';

export const AuthService = {
  login: (data: LoginPayload) => {
    return httpJsonClient.post<LoginPayload, IAuthResponse>('/api/auth/login', data);
  },
  register: (data: RegisterPayload) => {
    return httpJsonClient.post<RegisterPayload, IAuthResponse>('/api/auth/register', data);
  },
};
