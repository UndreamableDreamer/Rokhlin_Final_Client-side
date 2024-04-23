import { AxiosError } from 'axios';
import { takeLatest, put, call, select } from 'redux-saga/effects';

import { ERROR_TEXT } from '../../constants';
import { AUTH_REQUEST } from '../../actionTypes';
import { authenticateUser } from '../../api/auth';
import { authReject, authSuccess } from '../../actions/auth';
import { AuthAction } from '../../../types/actionInterfaces';
import { BackEndUserData } from '../../../types/userInterfaces';

function* authSaga({payload}: AuthAction) {
  try {
    const requestType: string = yield select((store) => store.modal.modalType);
    const user: BackEndUserData = yield call(authenticateUser, payload, requestType);
    yield put(authSuccess(user));
  } catch (e: unknown) {
    const currentError = e instanceof AxiosError ? e.response?.data.message : ERROR_TEXT;
    yield put(authReject(currentError));
  }
}

export default function* watcherAuthSaga() {
  yield takeLatest(AUTH_REQUEST, authSaga);
}
