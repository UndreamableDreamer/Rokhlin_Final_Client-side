import { AuthState } from '../../../types/stateInterfaces';
import { AuthAction } from '../../../types/actionInterfaces';
import { 
  AUTH_REQUEST_ERROR, 
  AUTH_ERROR_NULLIFY, 
  AUTH_LOGOUT, 
  AUTH_REQUEST, 
  AUTH_REQUEST_SUCCESS 
} from '../../actionTypes';

export const initialAuthState: AuthState = {
  isLoading: false,
  user: null,
  error: null,
  isAuthorized: Boolean(localStorage.getItem('accessToken'))
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
  case AUTH_REQUEST_SUCCESS:
    return {
      ...state,
      isLoading: false,
      user: action.payload?.user ?? null,
      isAuthorized: true
    };
  case AUTH_REQUEST_ERROR: 
    console.log(action.payload?.error);
    return {
      ...state,
      isLoading: false, 
      error: action.payload?.error ?? 'Unknown error',
    };
  case AUTH_LOGOUT:
    localStorage.removeItem('accessToken');
    return {
      ...state,
      isAuthorized: false
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

