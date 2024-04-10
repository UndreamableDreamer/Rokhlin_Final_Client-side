import { PostInterface } from '../../types/types';
import { POSTS_REQUEST, POSTS_REQUEST_ERROR, POSTS_REQUEST_SUCCESS } from '../actionTypes';

export const getAllPosts = () => ({
  type: POSTS_REQUEST,
});

export const requestSuccess = (payload: PostInterface[]) => ({
  type: POSTS_REQUEST_SUCCESS,
  payload,
});

export const requestError = (error: string) => ({
  type: POSTS_REQUEST_ERROR,
  error,
});
