import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import TradingPage from './containers/TradingPage';  
import TransactionHistoryRoute from './containers/TransactionHistoryRoute';
import UserPerformancePage from './containers/UserPerformancePage';

import Page1 from './containers/Page1';
import Page2 from './containers/Page2';
import Layout from './containers/Layout/Layout';
// The Layout component is used to wrap the Switch component that contains the Route components for each page. 
// This ensures that the layout is consistent across all pages, and allows you to easily update the header and 
// footer components in one place.

const Routes = () => {
    const users = 
    [
{
          name: 'John',
          numTrades: 10,
          numSuccessfulTrades: 7,
          totalAmount: 5000,
          totalProfit: 1000
        },
        {
          name: 'Jane',
          numTrades: 20,
          numSuccessfulTrades: 18,
          totalAmount: 10000,
          totalProfit: 2000
        }
    ]
    return (
        <>
            <Switch>
                <Route exact={true} path='/' component={Home} />
                <Route exact={true} path='/login' component={Login} />
                <Route exact={true} path='/signup' component={Signup} />
                <Route exact={true} path='/trading' component={TradingPage} />
                <Route exact={true} path='/history' component={TransactionHistoryRoute} />
                <Route exact path="/performance" render={() => <UserPerformancePage users={users} />} />
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
