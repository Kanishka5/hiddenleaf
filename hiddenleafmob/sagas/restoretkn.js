import {put, call} from 'redux-saga/effects';
import actions from '../actionTypes';

export default function* signin(action) {
  yield put({
    type: actions.RESTORE_TOKEN_SUCCESS,
    token: action.token,
  });
}
