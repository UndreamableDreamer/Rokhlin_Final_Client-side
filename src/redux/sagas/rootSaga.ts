import { all } from 'redux-saga/effects';

import watcherPostsSaga from './posts/postSaga';
import watcherAuthSaga from './auth/authSaga';

export default function* rootSaga() {
  yield all([
    watcherPostsSaga(),
    watcherAuthSaga()
  ]);
}
