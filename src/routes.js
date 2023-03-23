import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './containers/Home';
import Page1 from './containers/Page1';
import Page2 from './containers/Page2';
import Sidebar from './containers/Sidebar';

const Routes = () => {
    return (
        <Switch>
            <Sidebar />
            <Route exact={true} path='/'>
                <Home />
            </Route>
            <Route exact={true} path='/page1'>
                <Page1 />
            </Route>
            <Route exact={true} path='/page2'>
                <Page2 />
            </Route>
        </Switch>
    );
};

export default Routes;
