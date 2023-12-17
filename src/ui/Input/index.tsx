import { FC } from 'react';
import { classnames } from '@utils';
import { InputProps } from './types';
import styles from './styles.module.scss';

export const Input: FC<InputProps> = ({ className, ...props }) => {
  return <input {...props} className={classnames(styles.input, className)} />;
};
