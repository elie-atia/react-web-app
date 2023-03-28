import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Page1 from './containers/Page1';
import Page2 from './containers/Page2';
import Layout from './containers/Layout/Layout';

// The Layout component is used to wrap the Switch component that contains the Route components for each page. 
// This ensures that the layout is consistent across all pages, and allows you to easily update the header and 
// footer components in one place.

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact={true} path='/' component={Home} />
                <Route exact={true} path='/login' component={Login} />
                <Route exact={true} path='/signup' component={Signup} />

                <Layout>
                    <Route exact={true} path='/page1' component={Page1} />
                </Layout>
                <Layout>
                    <Route exact={true} path='/page2' component={Page2} />
                </Layout>
            </Switch>
        </>
    );
};

export default Routes;
