import { Post } from './posts-interfaces';
import { ModalType } from './custom-types';
import { BackEndUserData, FrontEndUserData } from './user-interfaces';

export interface NewsState {
  posts: Post[],
  isLoading: boolean,
  error: string | null,
}

export interface ModalState {
  isOpen: boolean;
  modalType: ModalType;
}

export interface AuthState {
  isLoading: boolean;
  user: FrontEndUserData | BackEndUserData | null;
  error: string | null;
}
