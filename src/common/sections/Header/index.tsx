import { FC } from 'react';
import { Container } from '../../reusables';

import styles from './styles.module.scss';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.logoWrapper}>
            <img className={styles.logo} src='https://clck.ru/37iSTh' alt='logo' />
            <h1 className={styles.name}>Timetable generator</h1>
          </div>
          <img className={styles.user} src='https://clck.ru/33WzZN' alt='user' />
        </div>
      </Container>
    </header>
  );
};
