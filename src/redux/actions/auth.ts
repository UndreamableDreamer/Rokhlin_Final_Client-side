import { AuthAction } from '../../types/action-interfaces';
import { AUTH_ERROR, AUTH_PENDING, AUTH_SUCCESS } from '../actionTypes';
import { BackEndUserData, FrontEndUserData } from '../../types/user-interfaces';

export const authRequest = (payload: FrontEndUserData): AuthAction => ({
  type: AUTH_PENDING,
  payload
});

export const authSuccess = (payload: BackEndUserData): AuthAction => ({
  type: AUTH_SUCCESS,
  payload
});

export const authReject = (error: string): AuthAction => ({
  type: AUTH_ERROR,
  error
});
