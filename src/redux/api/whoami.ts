
import { UserBackendProfile } from '../../types/userInterfaces';

import api from './api';

export const whoami = async (): Promise<UserBackendProfile | never> => {
  const user = await api.get<UserBackendProfile>('auth/whoami');
  return user.data;
};
