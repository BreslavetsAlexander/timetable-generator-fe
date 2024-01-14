import { FC } from 'react';

import { classnames } from '@utils';

import { IContainerProps } from './types';

import styles from './styles.module.scss';

export const Container: FC<IContainerProps> = ({ children, className }) => {
  return <div className={classnames(styles.container, className)}>{children}</div>;
};
