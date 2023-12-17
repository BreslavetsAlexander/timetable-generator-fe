import { FormValues } from './types';

export const INPUT_NAMES: { [key in keyof FormValues]: key } = {
  username: 'username',
  password: 'password',
};

export const INITIAL_VALUES: FormValues = {
  username: '',
  password: '',
};
