import {AsyncStorage} from 'react-native';
import {put, call} from 'redux-saga/effects';
import actions from '../actionTypes';

const _storeData = async (tkn) => {
  try {
    await AsyncStorage.setItem('siginToken', tkn);
  } catch (error) {
    console.log(error);
  }
};

export default function* signin(action) {
  try {
    yield call(_storeData, action.token);
    yield put({
      type: actions.SIGNIN_USER_SUCCESS,
      token: action.token,
    });
  } catch (error) {
    console.log(error);
  }
}
