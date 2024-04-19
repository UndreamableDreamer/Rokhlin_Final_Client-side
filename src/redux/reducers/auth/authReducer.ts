import { AuthState } from '../../../types/state-interfaces';
import { AuthAction } from '../../../types/action-interfaces';
import { 
  AUTH_ERROR, 
  AUTH_ERROR_NULLIFY, 
  AUTH_LOGOUT, 
  AUTH_REQUEST, 
  AUTH_SUCCESS } from '../../actionTypes';

export const initialAuthState: AuthState = {
  isLoading: false,
  user: null,
  error: null,
  authorized: !!localStorage.getItem('token')
};

export const authReducer = (
  state: AuthState = initialAuthState, 
  action: AuthAction
): AuthState => {
  switch (action.type) {
  case AUTH_REQUEST:
    return {
      ...state,
      isLoading: true,
    };
  case AUTH_SUCCESS:
    return {
      ...state,
      isLoading: false,
      user: action.payload ?? null,
      authorized: true
    };
  case AUTH_ERROR: 
    return {
      ...state,
      isLoading: false, 
      error: action.error ?? 'Unknown error',
    };
  case AUTH_LOGOUT:
    localStorage.removeItem('token');
    return {
      ...state,
      authorized: false
    };
  case AUTH_ERROR_NULLIFY:
    return {
      ...state,
      error: null
    };
  default:
    return state;
  }
};

