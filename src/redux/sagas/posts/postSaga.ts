import { AxiosError } from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import { ERROR_TEXT } from '../../constants';
import { getPosts } from '../../api/getPosts';
import { POSTS_REQUEST } from '../../actionTypes';
import { Post } from '../../../types/posts-interfaces';
import { requestSuccess, requestError } from '../../actions/posts';

function* getAllPostsSaga() {
  try {
    const posts: Post[] = yield call(getPosts);
    yield put(requestSuccess(posts));
  } catch (e: unknown) {
    const currentError = e instanceof AxiosError ? e.message : ERROR_TEXT;
    yield put(requestError(currentError));
  }
}

export default function* watcherPostsSaga() {
  yield takeLatest(POSTS_REQUEST, getAllPostsSaga);
}
