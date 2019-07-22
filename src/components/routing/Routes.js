import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login';
import NotFound from './NotFound';
import LogList from '../LogList';

const Routes = () => {
  return (
    <section className='container'>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/logs' component={LogList} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
