import { POSTS_REQUEST, POSTS_REQUEST_SUCCESS, POSTS_REQUEST_ERROR } from '../../actionTypes';
import { PostActionInterface, StateInterface } from '../../../types/types';
import { ERROR_TEXT } from '../../constants';

const initialState: StateInterface = {
  posts: [],
  isLoading: false,
  error: null,
};

export const postsReducer = (
  state: StateInterface = initialState, 
  action: PostActionInterface 
) => {
  switch (action.type) {
  case POSTS_REQUEST:
    return {
      ...state,
      isLoading: true,
      error: null,
    };
  case POSTS_REQUEST_SUCCESS:
    return {
      ...state,
      isLoading: false,
      posts: action.payload ?? [],
      error: null,
    };    
  case POSTS_REQUEST_ERROR:
    return {
      ...state,
      isLoading: false,
      error: action.error ?? ERROR_TEXT,
    };
  default:
    return initialState;
  }
};

