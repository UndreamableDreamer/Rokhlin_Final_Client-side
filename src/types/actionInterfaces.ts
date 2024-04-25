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

export interface UserAction {
  type: string,
  payload?: UsersPayloadInterface
}

export interface UsersPayloadInterface {
  user?: UserBackendProfile
  posts?: Post[]
  error?: string
  author?: string
}
