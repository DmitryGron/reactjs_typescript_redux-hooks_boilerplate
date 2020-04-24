import { AppRouteProps } from '../../../types/AppRouteProps';
import LoginPage from '../../../pages/Authentication/SignIn';
import {AppPath} from '../../App/appRoutes';

export const RegistrationPath = {
    ROOT: `${AppPath.LOGIN}`,
};

export const routes: AppRouteProps[] = [
    {
        path: RegistrationPath.ROOT,
        component: LoginPage,
    },
];
