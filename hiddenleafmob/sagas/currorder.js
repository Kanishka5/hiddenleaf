import {put} from 'redux-saga/effects';
import actions from '../actionTypes';

export default function* currorder(action) {
  yield put({
    type: actions.SET_CURRORDER_SUCCESS,
    response: action.payload,
  });
}
