import { Post } from './postsInterfaces';
import { ModalType } from './customTypes';
import { BackEndUserData, FrontEndUserData } from './userInterfaces';

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
  user: FrontEndUserData | BackEndUserData | null,
  error: string | null,
  isAuthorized: boolean
}
