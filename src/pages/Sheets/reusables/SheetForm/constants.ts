import { SheetFormValues, Group, Row } from './types';

export const INPUT_NAMES: { [key in keyof SheetFormValues]: key } = {
  name: 'name',
  description: 'description',
  groups: 'groups',
};

export const EMPTY_GROUP: Group = {
  name: '',
  rows: [],
};

export const EMPTY_ROW: Row = {
  name: '',
  start: '',
  end: '',
};
