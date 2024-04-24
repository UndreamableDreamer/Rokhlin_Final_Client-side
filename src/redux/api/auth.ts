
import { ModalType } from '../../types/customTypes';
import { UserBackendProfile, UserCredentials } from '../../types/userInterfaces';
import { BackEndAuthResponse } from '../../types/systemInterfaces';

import api from './api';

export const authenticateUser = async (
  payload: UserCredentials, 
  type: ModalType
): Promise<UserBackendProfile | never> => {
  const { data } = await api.post<BackEndAuthResponse>(`auth/${type}`, payload);
  localStorage.setItem('accessToken', data.token);
  return data.payload;
};
