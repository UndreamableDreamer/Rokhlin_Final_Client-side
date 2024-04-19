
import { ModalType } from '../../types/custom-types';
import { FrontEndUserData } from '../../types/user-interfaces';
import { BackEndAuthResponse } from '../../types/system-interfaces';

import api from './api';

export const authenticateUser = async (payload: FrontEndUserData, type: ModalType) => {
  const { data } = await api.post<BackEndAuthResponse>(`auth/${type}`, payload);
  localStorage.setItem('token', data.token);
  return data.payload;
};
