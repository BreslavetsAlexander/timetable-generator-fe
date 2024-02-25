import { FC } from 'react';
import { SheetForm } from '../reusables';
import { INITIAL_VALUES } from './constants';
import styles from './styles.module.scss';

export const CreateSheet: FC = () => {
  return (
    <div>
      <p className={styles.title}>Create sheet</p>
      <SheetForm
        initialValues={INITIAL_VALUES}
        onSubmit={console.log}
        submitButtonLabel='Create'
        onCancel={() => {}}
      />
    </div>
  );
};
