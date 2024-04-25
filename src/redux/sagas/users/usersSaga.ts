import { AxiosError } from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import { ERROR_TEXT } from '../../constants';
import getAuthorPosts from '../../api/getAuthorPosts';
import { OWNED_POSTS_FOR_USER_REQUEST, POSTS_FOR_AUTHOR_REQUEST } from '../../actionTypes';
import { requestPostsForUserError, requestPostsForUserSuccess } from '../../actions/users';
import { UserProfileWithPosts } from '../../../types/userInterfaces';
import { UserAction } from '../../../types/actionInterfaces';
import getUserPosts from '../../api/getUserPosts';

function* getAuthorPostsWorker({ payload }: UserAction ) {
  try {
    const data: UserProfileWithPosts = yield call(getAuthorPosts, payload?.author);
    yield put(requestPostsForUserSuccess(data));
  } catch (e: unknown) {
    const currentError = e instanceof AxiosError ? e.response?.data.message : ERROR_TEXT;
    yield put(requestPostsForUserError(currentError));
  }
}

function* getUserPostsWorker() {
  try {
    const data: UserProfileWithPosts = yield call(getUserPosts);
    yield put(requestPostsForUserSuccess(data));
  } catch (e: unknown) {
    const currentError = e instanceof AxiosError ? e.response?.data.message : ERROR_TEXT;
    yield put(requestPostsForUserError(currentError));
  }
}

export function* watcherAuthorPostsSaga() {
  yield takeLatest(POSTS_FOR_AUTHOR_REQUEST, getAuthorPostsWorker);
}

export function* watcherUserPostsSaga() {
  yield takeLatest(OWNED_POSTS_FOR_USER_REQUEST, getUserPostsWorker);
}
