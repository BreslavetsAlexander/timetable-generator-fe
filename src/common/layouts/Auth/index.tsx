import { FC, PropsWithChildren } from 'react';
import { Header, Footer } from '../../sections';

import styles from './styles.module.scss';

export const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
