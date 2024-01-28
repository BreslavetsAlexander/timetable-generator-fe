import { IUser } from '@definitions';

export interface ILoginResponse {
  user: IUser;
  token: string;
}
