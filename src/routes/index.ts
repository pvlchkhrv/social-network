import {ComponentType} from 'react';
import {Login} from '../pages/Login';
import {Profile} from '../pages/Profile';

export interface IRoute {
    path: string;
    component: ComponentType;
    exact?: boolean;
}

enum RouteNames {
    LOGIN = '/login',
    PROFILE = '/'
}

const publicRoutes: IRoute [] = [
    {path: RouteNames.LOGIN, exact: true, component: Login},
]
const privateRoutes: IRoute [] = [
    {path: RouteNames.PROFILE, exact: true, component: Profile},
]

export {
    publicRoutes,
    privateRoutes
}
