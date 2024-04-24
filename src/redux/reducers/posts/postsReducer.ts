import { ERROR_TEXT } from '../../constants';
import { NewsState } from '../../../types/stateInterfaces';
import { PostAction } from '../../../types/actionInterfaces';
import { POSTS_REQUEST, POSTS_REQUEST_SUCCESS, POSTS_REQUEST_ERROR } from '../../actionTypes';

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
  case POSTS_REQUEST_SUCCESS:
    return {
      ...state,
      isLoading: false,
      posts: action.payload?.posts ?? [],
      error: null,
    };    
  case POSTS_REQUEST_ERROR:
    return {
      ...state,
      isLoading: false,
      error: action.payload?.error ?? ERROR_TEXT,
    };
  default:
    return state;
  }
};

