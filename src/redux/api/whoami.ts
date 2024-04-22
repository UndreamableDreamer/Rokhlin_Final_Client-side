
import { BackEndUserData } from '../../types/user-interfaces';

import api from './api';

export const whoami = async () => {
  const user = await api.get<BackEndUserData>('auth/whoami');
  return user.data;
};
