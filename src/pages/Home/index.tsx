import { FC } from 'react';
import { useCurrentUserContext } from '../../contexts';

export const Home: FC = () => {
  const { currentUser } = useCurrentUserContext();

  return (
    <div>
      <pre>{JSON.stringify(currentUser, null, 2)}</pre>
    </div>
  );
};
