import { FormValues } from './types';

export const INPUT_NAMES: { [key in keyof FormValues]: key } = {
  firstName: 'firstName',
  lastName: 'lastName',
  username: 'username',
  password: 'password',
};

export const INITIAL_VALUES: FormValues = {
  firstName: '',
  lastName: '',
  username: '',
  password: '',
};
