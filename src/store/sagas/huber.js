import api from 'services/api';

import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/huber';

export function* getHuber(action) {
  const userResponse = yield call(api.get, `/users/${action.user}`);
  const reposResponse = yield call(api.get, `/users/${action.user}/repos`);

  if (userResponse.ok && reposResponse.ok) {
    yield put(ActionCreators.huberSuccess(userResponse.data, reposResponse.data));
  } else {
    yield put(ActionCreators.huberFailure());
  }
}
