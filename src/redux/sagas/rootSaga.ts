import { all } from 'redux-saga/effects';

import watcherSaga from './posts/postSaga';

export default function* rootSaga() {
  yield all([
    watcherSaga(),
  ]);
}
