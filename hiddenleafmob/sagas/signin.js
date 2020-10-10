import {AsyncStorage} from 'react-native';
import {put, call} from 'redux-saga/effects';
import actions from '../actionTypes';

const _storeData = async () => {
  try {
    await AsyncStorage.setItem('siginToken', '55555');
  } catch (error) {
    console.log(error);
  }
};

export default function* signin(action) {
  try {
    yield call(_storeData);
    yield put({
      type: actions.SIGNIN_USER_SUCCESS,
    });
  } catch (error) {
    console.log(error);
  }
}
