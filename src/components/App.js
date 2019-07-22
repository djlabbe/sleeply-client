import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './routing/Routes';
import Landing from './Landing';
import NavBar from './NavBar';

import '../style/App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route component={Routes} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
