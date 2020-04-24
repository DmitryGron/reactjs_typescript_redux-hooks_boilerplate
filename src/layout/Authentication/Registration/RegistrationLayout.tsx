import React from 'react';
import { Route, Switch } from 'react-router';
import { routes } from './registrationRoutes';

const RegistrationLayout: React.FC = () => <Switch> {routes.map((route, i) => <Route key={i} {...route} />)}</Switch>;

export default RegistrationLayout;
