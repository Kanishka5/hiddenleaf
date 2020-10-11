import actions from '../actionTypes';

const defaultState = {
  isLoading: true,
  isLoggedIn: false,
  userToken: null,
};

const user = (state = defaultState, action) => {
  switch (action.type) {
    case actions.SIGNIN_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        userToken: action.token,
      };
    case actions.RESTORE_TOKEN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: action.token === null ? false : true,
        userToken: action.token,
      };
    case actions.SIGNOUT_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        userToken: '',
      };
    default:
      return state;
  }
};

export default user;
