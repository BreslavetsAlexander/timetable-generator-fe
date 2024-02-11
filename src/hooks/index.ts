import { useState } from 'react';

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const waiting = <T>(promise: Promise<T>): Promise<T> => {
    return promise.finally(() => setIsLoading(false));
  };

  return { isLoading, waiting };
};
