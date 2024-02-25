import { FC } from 'react';
import { Field, FieldProps } from 'formik';
import { classnames } from '@utils';
import { TextareaProps } from './types';
import styles from './styles.module.scss';

export const Textarea: FC<TextareaProps> = ({ className, ...props }) => {
  return <textarea {...props} className={classnames(styles.textarea, className)} />;
};

export const FormTextarea: FC<TextareaProps> = ({ name, ...props }) => {
  return (
    <Field name={name}>
      {({ field }: FieldProps) => {
        return <Textarea {...props} {...field} />;
      }}
    </Field>
  );
};
