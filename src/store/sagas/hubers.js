import api from 'services/api';

import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/hubers';

export function* getHubers(action) {
  const userResponse = yield call(api.get, `/search/users?q=${action.user}`);

  if (userResponse.ok) {
    yield put(ActionCreators.hubersSuccess(userResponse.data.items, []));
  } else {
    yield put(ActionCreators.hubersFailure());
  }
}
