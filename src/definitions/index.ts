export interface IWithId {
  id: string;
}

export interface IUser extends IWithId {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export type LoginPayload = Pick<IUser, 'username' | 'password'>;

export type RegisterPayload = Omit<IUser, 'id'>;
