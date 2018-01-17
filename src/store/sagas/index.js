import { all, takeLatest } from 'redux-saga/effects';

/* Types */
import { Types as HubersTypes } from 'store/ducks/hubers';
import { Types as GithuberTypes } from 'store/ducks/githuber';

/* Sagas */
import { getHubers } from './hubers';
import { getGitHuber } from './githuber';

export default function* root() {
  yield all([
    takeLatest(HubersTypes.HUBERS_REQUEST, getHubers),
    takeLatest(GithuberTypes.GITHUBER_REQUEST, getGitHuber),
  ]);
}
