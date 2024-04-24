
import { Post } from '../../types/postsInterfaces';
import { PostAction } from '../../types/actionInterfaces';
import { POSTS_REQUEST, POSTS_REQUEST_ERROR, POSTS_REQUEST_SUCCESS } from '../actionTypes';

export const getAllPosts = (): PostAction => ({
  type: POSTS_REQUEST,
});

export const requestPostsSuccess = (payload: Post[]): PostAction => ({
  type: POSTS_REQUEST_SUCCESS,
  payload: { posts: payload }
});

export const requestPostsError = (payload: string): PostAction => ({
  type: POSTS_REQUEST_ERROR,
  payload: { error: payload }
});
