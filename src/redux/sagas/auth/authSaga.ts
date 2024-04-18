import { AxiosError } from 'axios';
import { takeLatest, put, call, select } from 'redux-saga/effects';

import { ERROR_TEXT } from '../../constants';
import { AUTH_PENDING } from '../../actionTypes';
import { authenticateUser } from '../../api/auth';
import { BackEndUserData } from '../../../types/user-interfaces';
import { authReject, authSuccess } from '../../actions/auth';
import { AuthAction } from '../../../types/action-interfaces';

function* authSaga({payload}: AuthAction) {
  console.log('were here');
  try {
    const requestType: string = yield select((store) => store.modal.modalType);
    const user: BackEndUserData = yield call(authenticateUser, payload, requestType);
    yield put(authSuccess(user));
  } catch (e: unknown) {
    const currentError = e instanceof AxiosError ? e.message : ERROR_TEXT;
    yield put(authReject(currentError));
  }
}

export default function* watcherAuthSaga() {
  yield takeLatest(AUTH_PENDING, authSaga);
}
