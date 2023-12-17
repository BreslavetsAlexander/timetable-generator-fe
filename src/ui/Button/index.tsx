import { FC } from 'react';
import { classnames } from '@utils';
import { ButtonProps } from './types';
import styles from './styles.module.scss';

export const Button: FC<ButtonProps> = ({ className, block, primary, danger, ...props }) => {
  return (
    <button
      {...props}
      className={classnames(styles.button, className, {
        [styles.block]: block,
        [styles.primary]: primary,
        [styles.danger]: danger,
      })}
    />
  );
};
