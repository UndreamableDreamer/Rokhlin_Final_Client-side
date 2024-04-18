import { BackEndUserData } from './user-interfaces';

export interface ErrorMessage {
  error: string | null,
  severity: 'info'| 'error',
}

export interface BackEndAuthResponse {
  user: BackEndUserData;
  token: string;
}
