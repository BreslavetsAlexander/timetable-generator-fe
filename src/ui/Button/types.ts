import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  block?: boolean;
  primary?: boolean;
  danger?: boolean;
};
