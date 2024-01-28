import { HttpJsonClient } from '@utils';

export const httpJsonClient = new HttpJsonClient();

export const protectedHttpJsonClient = new HttpJsonClient({
  headers: {
    authorization: 'authorization-test',
  },
});
