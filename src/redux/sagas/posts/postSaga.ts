// sagas.js
import { takeLatest, put, call } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import { requestError, requestSuccess } from '../../actions/action';
import { PostInterface } from '../../../types/types';
import { POSTS_REQUEST } from '../../actionTypes';
import { getPosts } from '../../api/getPosts';
import { ERROR_TEXT } from '../../constants';

function* getAllPostsSaga() {
  try {
    const posts: PostInterface[] = yield call(getPosts);
    yield put(requestSuccess(posts));
  } catch (e: unknown) {
    const currentError = e instanceof AxiosError ? e.message : ERROR_TEXT;
    yield put(requestError(currentError));
  }
}

export default function* watcherSaga() {
  yield takeLatest(POSTS_REQUEST, getAllPostsSaga);
}
