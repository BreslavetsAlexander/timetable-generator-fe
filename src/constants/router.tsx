import { createBrowserRouter } from 'react-router-dom';
import { Home, Login } from '../pages';
import { Page, AuthLayout, MainLayout } from '../common';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
};

export const ROUTER = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Page Layout={MainLayout} Component={Home} />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Page Layout={AuthLayout} Component={Login} />,
  },
]);
