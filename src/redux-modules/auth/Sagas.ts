import { put, call, fork, all, takeEvery } from 'redux-saga/effects';
import { get } from 'lodash';

import {
  AUTH_VERIFICATION,
  AUTH_VERIFICATION_LOADING,
  AUTH_VERIFICATION_COMPLETE,
  AUTH_VERIFICATION_ERROR,
} from './Actions';
import { authUser } from '@/Services/home';
import { AuthVerificationPayload, ISagaAction } from './Types';

import { ERROR_MESSAGES } from '@/constants';

function* authVerification({ payload }: ISagaAction<AuthVerificationPayload>) {
  const cb = get(payload, 'onSuccess');
  try {
    yield put({ type: AUTH_VERIFICATION_LOADING });
    const response: unknown = yield call(() => authUser(payload));
    yield put({ type: AUTH_VERIFICATION_COMPLETE, payload: response });
    cb();
  } catch (error: unknown) {
    yield put({
      type: AUTH_VERIFICATION_ERROR,
      payload: ERROR_MESSAGES.ERROR_SOMETHING_WENT_WRONG.errorMessage,
    });
  }
}

function* authVerificationSaga() {
  yield takeEvery(AUTH_VERIFICATION, authVerification);
}

export default function* authSagas() {
  yield all([fork(authVerificationSaga)]);
}
