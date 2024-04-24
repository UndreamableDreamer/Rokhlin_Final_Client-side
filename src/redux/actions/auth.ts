import { AuthAction } from '../../types/actionInterfaces';
import { UserBackendProfile, UserCredentials } from '../../types/userInterfaces';
import { 
  AUTH_REQUEST_ERROR, 
  AUTH_ERROR_NULLIFY, 
  AUTH_LOGOUT, 
  AUTH_REQUEST, 
  AUTH_REQUEST_SUCCESS, 
  AUTH_REQUEST_WHOAMI 
} from '../actionTypes';

export const authSendRequest = (payload: UserCredentials): AuthAction => ({
  type: AUTH_REQUEST,
  payload
});

export const authRequestSuccess = (payload: UserBackendProfile): AuthAction => ({
  type: AUTH_REQUEST_SUCCESS,
  payload: { user: payload }
});

export const authRequestReject = (payload: string): AuthAction => ({
  type: AUTH_REQUEST_ERROR,
  payload: { error: payload }
});

export const authLogout = (): AuthAction => ({
  type: AUTH_LOGOUT
});

export const authRequestWhoAmI = (): AuthAction => ({
  type: AUTH_REQUEST_WHOAMI
});

export const authErrorNullify = (): AuthAction => ({
  type: AUTH_ERROR_NULLIFY
});

