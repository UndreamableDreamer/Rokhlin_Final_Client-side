import { AuthState } from '../../../types/state-interfaces';
import { AuthAction } from '../../../types/action-interfaces';
import { AUTH_ERROR, AUTH_PENDING, AUTH_SUCCESS } from '../../actionTypes';

export const initialAuthState: AuthState = {
  isLoading: false,
  user: null,
  error: null
};

export const authReducer = (
  state: AuthState = initialAuthState, 
  action: AuthAction
): AuthState => {
  switch (action.type) {
  case AUTH_PENDING:
    console.log(action);
    return {
      ...state,
      isLoading: true,
      error: null
    };
  case AUTH_SUCCESS:
    return {
      ...state,
      isLoading: false,
      user: action.payload ?? null
    };
  case AUTH_ERROR: 
    return {
      ...state,
      isLoading: false, 
      error: action.error ?? 'Unknown error',
    };
  default:
    return state;
  }
};

