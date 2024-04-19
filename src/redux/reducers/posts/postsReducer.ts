import { ERROR_TEXT } from '../../constants';
import { NewsState } from '../../../types/state-interfaces';
import { PostAction } from '../../../types/action-interfaces';
import { POSTS_REQUEST, POSTS_SUCCESS, POSTS_ERROR } from '../../actionTypes';

const initialState: NewsState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const postsReducer = (
  state: NewsState = initialState, 
  action: PostAction 
): NewsState => {
  switch (action.type) {
  case POSTS_REQUEST:
    return {
      ...state,
      posts: [],
      isLoading: true,
      error: null,
    };
  case POSTS_SUCCESS:
    return {
      ...state,
      isLoading: false,
      posts: action.payload ?? [],
      error: null,
    };    
  case POSTS_ERROR:
    return {
      ...state,
      isLoading: false,
      error: action.error ?? ERROR_TEXT,
    };
  default:
    return state;
  }
};

