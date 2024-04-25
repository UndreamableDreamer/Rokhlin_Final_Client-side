import { all } from 'redux-saga/effects';

import watcherPostsSaga from './posts/postSaga';
import watcherAuthSaga from './auth/authSaga';
import watcherWhoAmISaga from './auth/whoamiSaga';
import { watcherAuthorPostsSaga, watcherUserPostsSaga } from './users/usersSaga';

export default function* rootSaga() {
  yield all([
    watcherAuthSaga(),
    watcherPostsSaga(),
    watcherWhoAmISaga(),
    watcherAuthorPostsSaga(),
    watcherUserPostsSaga()
  ]);
}
