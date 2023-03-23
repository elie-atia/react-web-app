import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './containers/Home';
import Page1 from './containers/Page1';
import Page2 from './containers/Page2';
import Layout from './containers/Layout/Layout';

const Routes = () => {
    return (
        <Switch>
            <Route exact={true} path='/'>
            <Layout>
                <Home />
                </Layout>
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
