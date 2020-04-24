import { AppRouteProps } from '../../../types/AppRouteProps';
import SignUp from '../../../pages/Authentication/SignUp';
import {AppPath} from '../../App/appRoutes';

export const RegistrationPath = {
    ROOT: `${AppPath.REGISTRATION}`,
    SOCIAL: `${AppPath.REGISTRATION}/social`,
};

export const routes: AppRouteProps[] = [
    {
        path: RegistrationPath.ROOT,
        component: SignUp,
    },
    {
        path: RegistrationPath.SOCIAL,
        component: SignUp,

    },
];
