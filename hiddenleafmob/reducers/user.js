import {AsyncStorage} from 'react-native';
import actions from '../actionTypes';

const _retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('siginToken');
    return value;
  } catch (error) {
    // Error retrieving data
    return '';
  }
};

const defaultState = {
  isLoggedIn: _retrieveData() === '' ? false : true,
  userToken: _retrieveData(),
  signinError: '',
};

const user = (state = defaultState, action) => {
  console.log(state);
  switch (action.type) {
    case actions.SIGNIN_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        userToken: action.token,
      };
    default:
      return state;
  }
};

export default user;
