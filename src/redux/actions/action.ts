import { PostInterface } from '../../types/types';
import { REQUEST_POSTS, REQUEST_POSTS_ERROR, REQUEST_POSTS_SUCCESS } from '../actionTypes';

export const getAllPosts = () => ({
  type: REQUEST_POSTS,
});

export const requestSuccess = (payload: PostInterface[]) => ({
  type: REQUEST_POSTS_SUCCESS,
  payload,
});

export const requestError = (error: string) => ({
  type: REQUEST_POSTS_ERROR,
  error,
});
