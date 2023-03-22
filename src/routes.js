import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home'

const Routes = () => {
    return (
        <Switch>
            <Route exact={true} path='/'>
                <Home />
            </Route>
        </Switch>
    );
};

export default Routes;
