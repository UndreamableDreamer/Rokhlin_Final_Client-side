import { AxiosError } from 'axios';
import { takeLatest, put, call, select } from 'redux-saga/effects';

import { ERROR_TEXT } from '../../constants';
import { AUTH_REQUEST } from '../../actionTypes';
import { authenticateUser } from '../../api/auth';
import { nullifyModal } from '../../actions/modal';
import { AuthAction } from '../../../types/actionInterfaces';
import { UserBackendProfile } from '../../../types/userInterfaces';
import { authRequestReject, authRequestSuccess } from '../../actions/auth';

function* authUserWorker({payload}: AuthAction) {
  try {
    const requestType: string = yield select((store) => store.modal.modalType);
    const user: UserBackendProfile = yield call(authenticateUser, payload, requestType);
    yield put(authRequestSuccess(user));
    yield put(nullifyModal());
  } catch (e: unknown) {
    const currentError = e instanceof AxiosError ? e.response?.data.message : ERROR_TEXT;
    yield put(authRequestReject(currentError));
  }
}

export default function* watcherAuthSaga() {
  yield takeLatest(AUTH_REQUEST, authUserWorker);
}
