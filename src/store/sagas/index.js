import { all, takeLatest } from 'redux-saga/effects';

/* Types */
import { Types as HuberTypes } from 'store/ducks/huber';

/* Sagas */
import { getHuber } from './huber';

export default function* root() {
  yield all([
    takeLatest(HuberTypes.HUBER_REQUEST, getHuber),
  ]);
}
