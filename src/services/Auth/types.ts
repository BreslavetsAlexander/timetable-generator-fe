import { IUser } from '@definitions';

export interface IAuthResponse {
  user: IUser;
  token: string;
}
