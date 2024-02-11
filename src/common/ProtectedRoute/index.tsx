import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useCurrentUserContext } from '../../contexts';
import { ROUTES } from '../../constants/router';

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { currentUser } = useCurrentUserContext();

  if (currentUser) {
    return children;
  }

  return <Navigate to={ROUTES.LOGIN} replace />;
};
