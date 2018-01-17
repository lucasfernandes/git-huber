import api from 'services/api';

import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/githuber';

export function* getGitHuber(action) {
  const userResponse = yield call(api.get, `/users/${action.user}`);
  const reposResponse = yield call(api.get, `/users/${action.user}/repos`);

  if (userResponse.ok && reposResponse.ok) {
    yield put(ActionCreators.githuberSuccess(userResponse.data, reposResponse.data));
  } else {
    yield put(ActionCreators.githuberFailure());
  }
}
