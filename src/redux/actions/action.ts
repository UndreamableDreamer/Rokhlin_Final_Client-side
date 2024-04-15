import { ModalActionInterface, PostActionInterface, PostInterface } from '../../types/types';
import { 
  POSTS_REQUEST, 
  POSTS_REQUEST_ERROR, 
  POSTS_REQUEST_SUCCESS, 
  SET_MODAL_OPEN, 
  SET_SHOW_ADDITIONAL_FIELD 
} from '../actionTypes';

export const getAllPosts = (): PostActionInterface => ({
  type: POSTS_REQUEST,
});

export const requestSuccess = (payload: PostInterface[]): PostActionInterface => ({
  type: POSTS_REQUEST_SUCCESS,
  payload,
});

export const requestError = (error: string): PostActionInterface => ({
  type: POSTS_REQUEST_ERROR,
  error,
});

export const setOpen = (isOpen: boolean): ModalActionInterface => ({
  type: SET_MODAL_OPEN,
  payload: isOpen
});

export const setShowAdditionalField = (isShowEmailField: boolean): ModalActionInterface => ({
  type: SET_SHOW_ADDITIONAL_FIELD,
  payload: isShowEmailField
});
