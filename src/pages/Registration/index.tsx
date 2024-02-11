import { FC } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, FormInput } from '@ui';
import { Formik, Form } from 'formik';
import { INITIAL_VALUES, INPUT_NAMES } from './constants';
import { useCurrentUserContext } from '../../contexts';
import { ROUTES } from '../../constants/router';
import { TOKEN_LOCAL_STORAGE_KEY } from '../../constants/app';
import { AuthService } from '@services';
import { FormValues } from './types';
import styles from './styles.module.scss';

export const Registration: FC = () => {
  const { setCurrentUser } = useCurrentUserContext();
  const navigate = useNavigate();

  const onSubmit = (values: FormValues) => {
    AuthService.register(values).then((response) => {
      setCurrentUser(response.user);
      localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, response.token);
      navigate(ROUTES.HOME);
    });
  };

  return (
    <div className={styles.formWrap}>
      <h1 className={styles.title}>Register</h1>
      <Formik<FormValues> initialValues={INITIAL_VALUES} onSubmit={onSubmit}>
        <Form>
          <FormInput
            name={INPUT_NAMES.firstName}
            placeholder='firstName'
            className={styles.formInput}
          />
          <FormInput
            name={INPUT_NAMES.lastName}
            placeholder='firstName'
            className={styles.formInput}
          />
          <FormInput
            name={INPUT_NAMES.username}
            placeholder='username'
            className={styles.formInput}
          />
          <FormInput
            name={INPUT_NAMES.password}
            placeholder='password'
            type='password'
            className={styles.formInput}
          />
          <Button className={styles.submitButton} type='submit' block primary>
            Register
          </Button>
          <Link to={ROUTES.LOGIN}>or login</Link>
        </Form>
      </Formik>
    </div>
  );
};
