import { UserAction, UsersPayloadInterface } from '../../types/actionInterfaces';
import { 
  OWNED_POSTS_FOR_USER_REQUEST,
  POSTS_FOR_AUTHOR_REQUEST, 
  POSTS_FOR_AUTHOR_REQUEST_ERROR, 
  POSTS_FOR_AUTHOR_REQUEST_SUCCESS 
} from '../actionTypes';

export const requestOwnedPostsForUser = (): UserAction => ({
  type: OWNED_POSTS_FOR_USER_REQUEST,
});

export const requestPostsForUser = (payload: string): UserAction => ({
  type: POSTS_FOR_AUTHOR_REQUEST,
  payload: { author: payload }
});

export const requestPostsForUserSuccess = (payload: UsersPayloadInterface): UserAction => ({
  type: POSTS_FOR_AUTHOR_REQUEST_SUCCESS,
  payload: { user: payload.user, posts: payload.posts }
});

export const requestPostsForUserError = (payload: string): UserAction => ({
  type: POSTS_FOR_AUTHOR_REQUEST_ERROR,
  payload: { error: payload }
});
