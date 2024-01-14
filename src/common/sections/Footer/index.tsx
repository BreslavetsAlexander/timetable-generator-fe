import { FC } from 'react';

import { Container } from '../../reusables';

import styles from './styles.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>Footer</Container>
    </footer>
  );
};
