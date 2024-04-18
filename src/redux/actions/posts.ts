
import { Post } from '../../types/posts-interfaces';
import { PostAction } from '../../types/action-interfaces';
import { POSTS_REQUEST, POSTS_REQUEST_ERROR, POSTS_REQUEST_SUCCESS } from '../actionTypes';

export const getAllPosts = (): PostAction => ({
  type: POSTS_REQUEST,
});

export const requestSuccess = (payload: Post[]): PostAction => ({
  type: POSTS_REQUEST_SUCCESS,
  payload,
});

export const requestError = (error: string): PostAction => ({
  type: POSTS_REQUEST_ERROR,
  error,
});
