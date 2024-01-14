import { FC } from 'react';
import { IProps } from './types';

export const Page: FC<IProps> = (props) => {
  const { Layout, Component } = props;

  return (
    <Layout>
      <Component />
    </Layout>
  );
};
