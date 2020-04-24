import { Reducer } from 'redux';
import { UserRegisterAction, UserLoginAction, UserActionTypes} from './actions';
import { AppState } from 'types/AppState';
import { AuthDataTypes } from 'types/AuthDataTypes';


export const registerReducer: Reducer<AuthDataTypes, UserActionTypes> = (state = {} as AuthDataTypes, action ) => {
  switch (action.type) {
    case UserRegisterAction.REGISTER_REQUEST:
      return {
        ...state,
      };
    case UserRegisterAction.REGISTER_SUCCESS:
      return {
        ...state,
        message: action.message,
      };
    case UserRegisterAction.REGISTER_FAILURE:
      return {
        ...state,
        message: action.error,
      };
    default:
      return state;
  }
};

export const loginReducer: Reducer<any, any> = (state = {}, action ) => {
switch (action.type) {
  case UserLoginAction.LOGIN_REQUEST:
    return {
      loggingIn: false,
      user: action.user,
    };
  case UserLoginAction.LOGIN_SUCCESS:
    return {
      loggedIn: true,
      user: action.user,
    };
  case UserLoginAction.LOGIN_FAILURE:
    return {};
  case UserLoginAction.LOGOUT:
    return {};
  default:
    return state;
}
};

export const isRegistered = (state: AppState): boolean => Boolean(state.registerReducer.message);
export const isLoggedIn = (state: AppState): boolean => Boolean(state.loginReducer.loggedIn);
