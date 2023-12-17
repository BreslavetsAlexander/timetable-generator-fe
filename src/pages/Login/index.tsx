import { FC } from 'react';
import { Button, Input } from '@ui';
import { Formik, Field, Form, FieldProps } from 'formik';
import { INITIAL_VALUES, INPUT_NAMES } from './constants';
import { FormValues } from './types';
import styles from './styles.module.scss';

export const Login: FC = () => {
  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.formWrap}>
        <h1 className={styles.title}>Login</h1>
        <Formik<FormValues> initialValues={INITIAL_VALUES} onSubmit={onSubmit}>
          <Form>
            <Field name={INPUT_NAMES.username}>
              {({ field }: FieldProps) => {
                return <Input placeholder='username' {...field} />;
              }}
            </Field>
            <Field name={INPUT_NAMES.password}>
              {({ field }: FieldProps) => {
                return (
                  <Input
                    placeholder='password'
                    type='password'
                    className={styles.password}
                    {...field}
                  />
                );
              }}
            </Field>
            <Button className={styles.submitButton} type='submit' block primary>
              Login
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
