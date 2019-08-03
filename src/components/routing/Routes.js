import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../auth/Login';
import NotFound from './NotFound';
import LogList from '../logs/LogList';
import Alert from '../layout/Alert';

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/logs' component={LogList} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
