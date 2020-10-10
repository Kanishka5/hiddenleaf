import {takeLatest} from 'redux-saga/effects';
import actions from '../actionTypes';

import signin from './signin';

export default function* saga() {
  yield takeLatest(actions.SIGNIN_USER, signin);
}
