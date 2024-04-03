import { REQUEST_POSTS, REQUEST_POSTS_SUCCESS, REQUEST_POSTS_ERROR } from '../../actionTypes';
import { PostActionInterface, StateInterface } from '../../../types/types';

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const postsReducer = (state: StateInterface = initialState, action: PostActionInterface) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case REQUEST_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload ?? [],
        error: null,
      };    
    case REQUEST_POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error ?? ' ',
      };
    default:
      return initialState;
  }
};

