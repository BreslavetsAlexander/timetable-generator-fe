import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ROUTER } from './constants/router';

export const App: FC = () => {
  return <RouterProvider router={ROUTER} />;
};
