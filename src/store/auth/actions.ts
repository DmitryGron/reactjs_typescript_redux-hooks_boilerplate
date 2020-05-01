import { Dispatch } from 'redux';
import {ReduxActionType} from '../../types/GlobalTypes';
import { userRegistration, userLogin, fakeLogin, fakeRegister } from '../../services/userAuth';

export enum UserRegisterAction {
  REGISTER_REQUEST= 'USERS_REGISTER_REQUEST',
  REGISTER_SUCCESS= 'USERS_REGISTER_SUCCESS',
  REGISTER_FAILURE= 'USERS_REGISTER_FAILURE',
}

export enum UserLoginAction {
  LOGIN_REQUEST= 'USERS_LOGIN_REQUEST',
  LOGIN_SUCCESS= 'USERS_LOGIN_SUCCESS',
  LOGIN_FAILURE= 'USERS_LOGIN_FAILURE',
  LOGOUT= 'USERS_LOGOUT',
}

type RegistrationTypes = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,

};

export const login = (credentials: Pick<RegistrationTypes, 'email'|'password'>) => async (dispatch: Dispatch) => {
  dispatch(fetchUserLoginRequest());
  if (process.env.REACT_APP_BE_PROD === 'false') {
    console.log('Mock', process.env.REACT_APP_BE_PROD);

    fakeLogin(credentials)
    .then(
        (user: any) => {
          console.log('user', user);
          localStorage.setItem('user', JSON.stringify(user));
          dispatch(fetchUserLoginSuccess(user));
        },
        (error: any) => {
          console.log('error', error);
          dispatch(fetchUserLoginFailure(error.toString()));
        }
    );
  } else {
    console.log('notMock', process.env.REACT_APP_BE_PROD);

    userLogin(credentials)
    .then(
        (user: any) => {
          console.log('user', user);
          localStorage.setItem('user', JSON.stringify(user));
          dispatch(fetchUserLoginSuccess(user));
        },
        (error: any) => {
          console.log('error', error);
          dispatch(fetchUserLoginFailure(error.toString()));
        }
    );
  }
  };


export const register = (credentials: RegistrationTypes) => async (dispatch: Dispatch) => {
  console.log('REACT_APP_BE_PROD :>> ', process.env.REACT_APP_BE_PROD);
  dispatch(fetchUserRegisterRequest());
  if (process.env.REACT_APP_BE_PROD === 'false') {
    fakeRegister(credentials)
    .then(
        (res: any) => {
          dispatch(fetchUserRegisterSuccess(res));
        },
        (error: any) => {
            dispatch(fetchUserRegisterFailure(error.toString()));
        }
    );
  } else {
    userRegistration(credentials)
    .then(
        (res: any) => {
          dispatch(fetchUserRegisterSuccess(res));
        },
        (error: any) => {
            dispatch(fetchUserRegisterFailure(error.toString()));
        }
    );
  }
};

const fetchUserRegisterRequest = () => ({type: UserRegisterAction.REGISTER_REQUEST as const});
const fetchUserRegisterSuccess = (message: string) => ({type: UserRegisterAction.REGISTER_SUCCESS as const, message});
const fetchUserRegisterFailure = (error: string) => ({type: UserRegisterAction.REGISTER_FAILURE as const, error});
const fetchUserLoginRequest = () => ({type: UserLoginAction.LOGIN_REQUEST as const});
const fetchUserLoginSuccess = (user: any) => ({type: UserLoginAction.LOGIN_SUCCESS as const, user});
const fetchUserLoginFailure = (error: string) => ({type: UserLoginAction.LOGIN_FAILURE as const, error});

export type UserActionTypes = ReduxActionType<typeof fetchUserRegisterRequest>
| ReduxActionType<typeof fetchUserRegisterSuccess>
| ReduxActionType<typeof fetchUserRegisterFailure>;
