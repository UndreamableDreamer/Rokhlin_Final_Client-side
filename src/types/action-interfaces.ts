import { Post } from './posts-interfaces';
import { FrontEndUserData, BackEndUserData } from './user-interfaces';

export interface PostAction {
  type: string,
  payload?: Post[],
  error?: string,
}

export interface ModalAction {
  type: string,
  payload?: boolean 
}

export interface AuthAction {
  type: string,
  payload?: FrontEndUserData | BackEndUserData,
  error?: string
}
