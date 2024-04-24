import { Post } from './postsInterfaces';
import { UserCredentials, UserBackendProfile } from './userInterfaces';

export interface PostAction {
  type: string,
  payload?: {
    posts?: Post[], 
    error?: string
  }
}

export interface ModalAction {
  type: string,
  payload?: boolean 
}

export interface AuthAction {
  type: string,
  payload?: {
    user?: UserCredentials | UserBackendProfile,
    error?: string
  }
}
