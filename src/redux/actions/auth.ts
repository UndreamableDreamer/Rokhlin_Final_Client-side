import { AuthAction } from '../../types/action-interfaces';
import { BackEndUserData, FrontEndUserData } from '../../types/user-interfaces';
import { 
  AUTH_ERROR, 
  AUTH_ERROR_NULLIFY, 
  AUTH_LOGOUT, 
  AUTH_REQUEST, 
  AUTH_SUCCESS } from '../actionTypes';

export const authRequest = (payload: FrontEndUserData): AuthAction => ({
  type: AUTH_REQUEST,
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

export const authLogout = (): AuthAction => ({
  type: AUTH_LOGOUT
});

export const authErrorNullify = (): AuthAction => ({
  type: AUTH_ERROR_NULLIFY
});

