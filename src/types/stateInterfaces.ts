import { Post } from './postsInterfaces';
import { ModalType } from './customTypes';
import { UserBackendProfile, UserCredentials } from './userInterfaces';

export interface NewsState {
  posts: Post[],
  isLoading: boolean,
  error: string | null
}

export interface ModalState {
  isOpen: boolean,
  modalType: ModalType
}

export interface AuthState {
  isLoading: boolean,
  user: UserCredentials | UserBackendProfile | null,
  error: string | null,
  isAuthorized: boolean
}
