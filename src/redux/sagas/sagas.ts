// sagas.js
import { takeLatest, put, call } from 'redux-saga/effects';

import { REQUEST_POSTS } from '../actionTypes';
import { getPosts } from '../api/getPosts';
import { requestError, requestSuccess } from '../actions/action';
import { AxiosError } from 'axios';

function* getAllPostsSaga() {
  try {
    const posts = yield call(getPosts);
    yield put(requestSuccess(posts));
  } catch (e: unknown) {
    const currentError = e instanceof AxiosError ? e.message : 'DEF_TEXT';
    yield put(requestError(currentError));
    }
  }

export default function* rootSaga() {
  yield takeLatest(REQUEST_POSTS, getAllPostsSaga);
}
