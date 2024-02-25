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

export interface ITimetableRow extends IWithId {
  start: string;
  end: string;
  name: string;
  groupId: ITimetableGroup['id'];
  sheetId: ISheet['id'];
}

export interface ITimetableGroup extends IWithId {
  name: string;
  sheetId: ISheet['id'];
}

export interface ISheet extends IWithId {
  name: string;
  description: string;
  authorId: IUser['id'];
}
