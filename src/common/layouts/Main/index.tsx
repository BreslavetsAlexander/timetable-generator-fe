import { FC, PropsWithChildren } from 'react';
import { Header, Footer } from '../../sections';

import { Container } from '../../reusables';

import styles from './styles.module.scss';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Container className={styles.container}>
          <div className={styles.content}>{children}</div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
