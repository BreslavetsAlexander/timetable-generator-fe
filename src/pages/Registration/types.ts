import { IUser } from '@definitions';

export type FormValues = Omit<IUser, 'id'>;
