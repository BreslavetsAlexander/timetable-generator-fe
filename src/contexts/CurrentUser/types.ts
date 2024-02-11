import { IUser } from '@definitions';

export interface CurrentUserContextValues {
  currentUser: IUser | null;
  setCurrentUser: (user: IUser | null) => void;
}
