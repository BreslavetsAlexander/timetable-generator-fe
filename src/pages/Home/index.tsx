import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@ui';
import { ROUTES } from '../../constants/router';
import styles from './styles.module.scss';

export const Home: FC = () => {
  return (
    <div>
      <div className={styles.header}>
        <p className={styles.title}>My sheets</p>
        <Button primary className={styles.button}>
          <Link to={ROUTES.SHEETS.CREATE} className={styles.link}>
            Create sheet
          </Link>
        </Button>
      </div>
    </div>
  );
};
