import AsyncStorage from '@react-native-community/async-storage';
import {put, call} from 'redux-saga/effects';
import actions from '../actionTypes';

export default function* logout(action) {
  AsyncStorage.removeItem('siginToken');
  yield put({
    type: actions.SIGNOUT_USER_SUCCESS,
  });
}
