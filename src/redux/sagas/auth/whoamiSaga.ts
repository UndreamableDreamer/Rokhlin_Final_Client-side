import { AxiosError } from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import { whoami } from '../../api/whoami';
import { ERROR_TEXT } from '../../constants';
import { AUTH_REQUEST_WHOAMI } from '../../actionTypes';
import { UserBackendProfile } from '../../../types/userInterfaces';
import { authRequestReject, authRequestSuccess } from '../../actions/auth';

function* whoamiUserWorker() {
  try {
    const user: UserBackendProfile = yield call(whoami);
    yield put(authRequestSuccess(user));
  } catch (e: unknown) {
    const currentError = e instanceof AxiosError ? e.response?.data.message : ERROR_TEXT;
    yield put(authRequestReject(currentError));
  }
}

export default function* watcherWhoAmISaga() {
  yield takeLatest(AUTH_REQUEST_WHOAMI, whoamiUserWorker);
}
