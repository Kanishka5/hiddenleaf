import {takeLatest} from 'redux-saga/effects';
import actions from '../actionTypes';

import signin from './signin';
import restoretkn from './restoretkn';
import signout from './logout';
import addorder from './addorder';
import currorder from './currorder';

export default function* saga() {
  yield takeLatest(actions.SIGNIN_USER, signin);
  yield takeLatest(actions.RESTORE_TOKEN, restoretkn);
  yield takeLatest(actions.SIGNOUT_USER, signout);
  yield takeLatest(actions.ADD_ORDER, addorder);
  yield takeLatest(actions.SET_CURRORDER, currorder);
}
