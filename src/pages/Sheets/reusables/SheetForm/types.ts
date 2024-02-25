import { ISheet, ITimetableGroup, ITimetableRow } from '@definitions';

export type Row = Pick<ITimetableRow, 'name' | 'start' | 'end'>;

export type Group = Pick<ITimetableGroup, 'name'> & {
  rows: Row[];
};

export type SheetFormValues = Omit<ISheet, 'id' | 'authorId'> & {
  groups: Group[];
};

export interface SheetFormProps {
  initialValues: SheetFormValues;
  onSubmit: (values: SheetFormValues) => void;
  submitButtonLabel: string;
  onCancel: () => void;
}
