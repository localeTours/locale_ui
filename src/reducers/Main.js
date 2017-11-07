import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './Dashboard';
import Login from './Login';

const Main = ({ history }) => {
  return (
    <main>
      <Switch>
        <Route exact path = '/' component={Dashboard} />
        <Route path='/login' component={Login} />
      </Switch>
    </main>
  )
}

export default Main;
