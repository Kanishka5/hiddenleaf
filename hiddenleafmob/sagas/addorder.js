import {put, call} from 'redux-saga/effects';
import actions from '../actionTypes';

export default function* addorder(action) {
  yield put({
    type: actions.ADD_ORDER_SUCCESS,
    response: action.payload,
  });
}
