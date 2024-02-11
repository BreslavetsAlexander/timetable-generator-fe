import { createContext, useContext, FC, PropsWithChildren, useState, useEffect } from 'react';
import { CurrentUserService } from '@services';
import { useLoading } from '../../hooks';
import { CurrentUserContextValues } from './types';
import { DEFAULT_CONTEXT_VALUES } from './constants';

const CurrentUserContext = createContext<CurrentUserContextValues>(DEFAULT_CONTEXT_VALUES);

export const useCurrentUserContext = (): CurrentUserContextValues => {
  return useContext(CurrentUserContext);
};

export const CurrentUserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<CurrentUserContextValues['currentUser']>(
    DEFAULT_CONTEXT_VALUES.currentUser,
  );
  const { isLoading: isUserLoading, waiting } = useLoading();

  useEffect(() => {
    waiting(CurrentUserService.get()).then(setCurrentUser);
  }, []);

  if (isUserLoading) {
    return <div>loading...</div>;
  }

  const value: CurrentUserContextValues = {
    currentUser,
    setCurrentUser,
  };

  return <CurrentUserContext.Provider value={value}>{children}</CurrentUserContext.Provider>;
};
