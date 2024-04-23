
import { ModalType } from '../../types/customTypes';
import { FrontEndUserData } from '../../types/userInterfaces';
import { BackEndAuthResponse } from '../../types/systemInterfaces';

import api from './api';

export const authenticateUser = async (payload: FrontEndUserData, type: ModalType) => {
  const { data } = await api.post<BackEndAuthResponse>(`auth/${type}`, payload);
  localStorage.setItem('accessToken', data.token);
  return data.payload;
};
