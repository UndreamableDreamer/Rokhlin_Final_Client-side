
import { Post } from '../../types/postsInterfaces';
import { PostAction } from '../../types/actionInterfaces';
import { POSTS_REQUEST, POSTS_ERROR, POSTS_SUCCESS } from '../actionTypes';

export const getAllPosts = (): PostAction => ({
  type: POSTS_REQUEST,
});

export const requestSuccess = (payload: Post[]): PostAction => ({
  type: POSTS_SUCCESS,
  payload,
});

export const requestError = (error: string): PostAction => ({
  type: POSTS_ERROR,
  error,
});
