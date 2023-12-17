import { ClassName } from './types';

export const classnames = (...classes: ClassName[]): string => {
  return classes
    .reduce<string[]>((acc, cls) => {
      if (!cls) {
        return acc;
      }

      if (typeof cls === 'string') {
        return [...acc, cls];
      }

      const filtered = Object.keys(cls).filter((key) => cls[key]);

      return [...acc, ...filtered];
    }, [])
    .join(' ');
};
