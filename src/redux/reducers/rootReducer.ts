import { combineReducers } from 'redux';

import { postsReducer } from './posts/postsReducer';
import { modalReducer } from './modal/modalReducer';
import { authReducer } from './auth/authReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  modal: modalReducer,
  auth: authReducer
});

export default rootReducer;
