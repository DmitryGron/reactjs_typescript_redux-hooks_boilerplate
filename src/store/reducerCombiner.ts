import { combineReducers } from 'redux';
import { registerReducer, loginReducer } from './auth/reducers';

const reducers = combineReducers({
  registerReducer,
  loginReducer,
});

export default reducers;
