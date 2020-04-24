import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppPath } from './appRoutes';
import { NotFound } from '../../pages/NotFound';
import Terms from '../../pages/Terms/Terms';
import PrivateRoute from 'components/PrivateRoute';

const RegistrationLayout = React.lazy(() => import('../Authentication/Registration/RegistrationLayout'));
const LoginLayout = React.lazy(() => import('../Authentication/Login/LoginLayout'));


const App: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading... </div>}>
            <Switch>
                <PrivateRoute path={AppPath.FLOW} component={Terms} />
                <Route path={AppPath.REGISTRATION} component={RegistrationLayout} />
                <Route path={AppPath.LOGIN} component={LoginLayout} />
                <Route component={NotFound} />
            </Switch>
        </Suspense>
    );
};


export default App;
