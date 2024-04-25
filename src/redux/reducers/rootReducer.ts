import { combineReducers } from 'redux';

import { postsReducer } from './posts/postsReducer';
import { modalReducer } from './modal/modalReducer';
import { authReducer } from './auth/authReducer';
import { usersReducer } from './users/usersReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  modal: modalReducer,
  user: usersReducer,
  auth: authReducer
});

export default rootReducer;
