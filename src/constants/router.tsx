import { createBrowserRouter } from 'react-router-dom';
import { Home, Login, Registration, CreateSheet } from '../pages';
import { Page, AuthLayout, MainLayout, ProtectedRoute } from '../common';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  SHEETS: {
    CREATE: '/sheets/create',
  },
};

export const ROUTER = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: (
      <ProtectedRoute>
        <Page Layout={MainLayout} Component={Home} />
      </ProtectedRoute>
    ),
  },
  {
    path: ROUTES.LOGIN,
    element: <Page Layout={AuthLayout} Component={Login} />,
  },
  {
    path: ROUTES.REGISTER,
    element: <Page Layout={AuthLayout} Component={Registration} />,
  },
  {
    path: ROUTES.SHEETS.CREATE,
    element: (
      <ProtectedRoute>
        <Page Layout={MainLayout} Component={CreateSheet} />
      </ProtectedRoute>
    ),
  },
]);
