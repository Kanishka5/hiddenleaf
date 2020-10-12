import actions from '../actionTypes';

const defaultState = {
  orders: [],
  currorder: null,
};

const order = (state = defaultState, action) => {
  console.log(state);
  switch (action.type) {
    case actions.ADD_ORDER_SUCCESS:
      return {
        ...state,
        orders: state.orders.concat(action.response),
      };
    case actions.SET_CURRORDER_SUCCESS:
      return {
        ...state,
        currorder: action.response,
      };
    default:
      return state;
  }
};

export default order;
