import { createBrowserRouter } from 'react-router-dom';
import { Home, Login } from '../pages';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
};

export const ROUTER = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
]);
