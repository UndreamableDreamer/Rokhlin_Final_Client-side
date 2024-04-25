import { AxiosError } from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import getPosts from '../../api/getPosts';
import { ERROR_TEXT } from '../../constants';
import { POSTS_REQUEST } from '../../actionTypes';
import { Post } from '../../../types/postsInterfaces';
import { requestPostsSuccess, requestPostsError } from '../../actions/posts';

function* getAllPostsWorker() {
  try {
    const posts: Post[] = yield call(getPosts);
    yield put(requestPostsSuccess(posts));
  } catch (e: unknown) {
    const currentError = e instanceof AxiosError ? e.response?.data.message : ERROR_TEXT;
    yield put(requestPostsError(currentError));
  }
}

export default function* watcherPostsSaga() {
  yield takeLatest(POSTS_REQUEST, getAllPostsWorker);
}
