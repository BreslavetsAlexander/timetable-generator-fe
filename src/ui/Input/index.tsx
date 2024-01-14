import { FC } from 'react';
import { Field, FieldProps } from 'formik';
import { classnames } from '@utils';
import { InputProps } from './types';
import styles from './styles.module.scss';

export const Input: FC<InputProps> = ({ className, ...props }) => {
  return <input {...props} className={classnames(styles.input, className)} />;
};

export const FormInput: FC<InputProps> = ({ name, ...props }) => {
  return (
    <Field name={name}>
      {({ field }: FieldProps) => {
        return <Input {...props} {...field} />;
      }}
    </Field>
  );
};
