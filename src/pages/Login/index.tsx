import { FC } from 'react';
import { Button, FormInput } from '@ui';
import { Formik, Form } from 'formik';
import { INITIAL_VALUES, INPUT_NAMES } from './constants';
import { AuthService } from '@services';
import { FormValues } from './types';
import styles from './styles.module.scss';

export const Login: FC = () => {
  const onSubmit = (values: FormValues) => {
    AuthService.login(values).then(console.log);
  };

  return (
    <div className={styles.formWrap}>
      <h1 className={styles.title}>Login</h1>
      <Formik<FormValues> initialValues={INITIAL_VALUES} onSubmit={onSubmit}>
        <Form>
          <FormInput name={INPUT_NAMES.username} placeholder='username' />
          <FormInput
            name={INPUT_NAMES.password}
            placeholder='password'
            type='password'
            className={styles.password}
          />
          <Button className={styles.submitButton} type='submit' block primary>
            Login
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
