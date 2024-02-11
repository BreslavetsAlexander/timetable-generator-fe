import { HttpJsonClient } from '@utils';
import { TOKEN_LOCAL_STORAGE_KEY } from '../../constants/app';

export const httpJsonClient = new HttpJsonClient();

export const protectedHttpJsonClient = new HttpJsonClient({
  headers: {
    authorization: localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY) || '',
  },
});
