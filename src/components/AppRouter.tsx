import React, {FC} from 'react';
import {Route, Switch} from 'react-router-dom';
import {publicRoutes} from '../routes';

export const AppRouter: FC = () => {
    return (
        <Switch>
            {publicRoutes.map(route =>
                <Route key={route.path} {...route}/>
            )}
        </Switch>
    );
};
