import {combineReducers} from 'redux';
import user from './user.js';
import order from './orders';

const reducers = combineReducers({
  user,
  order,
});

export default reducers;
