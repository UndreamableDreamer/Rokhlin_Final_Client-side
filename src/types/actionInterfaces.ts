import { Post } from './postsInterfaces';
import { FrontEndUserData, BackEndUserData } from './userInterfaces';

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
