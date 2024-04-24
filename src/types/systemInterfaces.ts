import { UserBackendProfile } from './userInterfaces';

export interface ErrorMessage {
  error: string | null,
  severity: 'info'| 'error'
}

export interface BackEndAuthResponse {
  payload: UserBackendProfile,
  token: string
}
