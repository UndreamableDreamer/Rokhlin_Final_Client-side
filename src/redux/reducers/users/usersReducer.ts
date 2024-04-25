import { ERROR_TEXT } from '../../constants';
import { UsersState } from '../../../types/stateInterfaces';
import { UserAction } from '../../../types/actionInterfaces';
import { 
  OWNED_POSTS_FOR_USER_REQUEST,
  POSTS_FOR_AUTHOR_REQUEST, 
  POSTS_FOR_AUTHOR_REQUEST_ERROR, 
  POSTS_FOR_AUTHOR_REQUEST_SUCCESS 
} from '../../actionTypes';

const initialState: UsersState = {
  user: null,
  posts: [],
  isLoading: false,
  error: null,
};

export const usersReducer = (
  state: UsersState = initialState, 
  action: UserAction
): UsersState => {
  switch (action.type) {
  case POSTS_FOR_AUTHOR_REQUEST || OWNED_POSTS_FOR_USER_REQUEST:
    return {
      ...state,
      user: null,
      posts: [],
      isLoading: true,
      error: null,
    };
  case POSTS_FOR_AUTHOR_REQUEST_SUCCESS:
    console.log(action);
    return {
      ...state,
      isLoading: false,
      user: action.payload?.user ?? null,
      posts: action.payload?.posts ?? [],
      error: null,
    };    
  case POSTS_FOR_AUTHOR_REQUEST_ERROR:
    return {
      ...state,
      isLoading: false,
      error: action.payload?.error ?? ERROR_TEXT,
    };
  default:
    return state;
  }
};

