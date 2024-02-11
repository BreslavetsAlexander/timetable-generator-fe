import { IUser } from '@definitions';
import { protectedHttpJsonClient } from '../httpClients';

export const CurrentUserService = {
  get: () => {
    return protectedHttpJsonClient.get<IUser>('/api/currentUser');
  },
};
