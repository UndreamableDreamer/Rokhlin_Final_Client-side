import { AxiosError } from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';

import { whoami } from '../../api/whoami';
import { ERROR_TEXT } from '../../constants';
import { AUTH_WHOAMI } from '../../actionTypes';
import { authReject, authSuccess } from '../../actions/auth';
import { BackEndUserData } from '../../../types/user-interfaces';

function* whoamiSaga() {
  try {
    const user: BackEndUserData = yield call(whoami);
    yield put(authSuccess(user));
  } catch (e: unknown) {
    const currentError = e instanceof AxiosError ? e.response?.data.message : ERROR_TEXT;
    yield put(authReject(currentError));
  }
}

export default function* watcherWhoAmISaga() {
  yield takeLatest(AUTH_WHOAMI, whoamiSaga);
}
