import {takeLatest} from 'redux-saga/effects';
import actions from '../actionTypes';

import signin from './signin';
import restoretkn from './restoretkn';
import signout from './logout';

export default function* saga() {
  yield takeLatest(actions.SIGNIN_USER, signin);
  yield takeLatest(actions.RESTORE_TOKEN, restoretkn);
  yield takeLatest(actions.SIGNOUT_USER, signout);
}
