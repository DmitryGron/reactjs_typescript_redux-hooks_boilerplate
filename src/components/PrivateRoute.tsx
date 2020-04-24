import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AppPath } from 'layout/App/appRoutes';
import axios from 'axios';
interface Props {
    exact?: boolean;
    path: string;
    component: React.ComponentType<any>;
  }

const PrivateRoute = ({component: Component}: Props) => {
  const user = localStorage.getItem('user');
  user ? axios.defaults.headers.common['Authorization'] = JSON.parse(user).token : axios.defaults.headers.common['Authorization'] = undefined;

  return axios.defaults.headers.common['Authorization'] ? ( <Route render={otherProps => (<Component {...otherProps} />)}/>) :
    ( <Redirect to={AppPath.LOGIN}/> );
};

export default PrivateRoute;
