import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './Dashboard';
import Login from './Login';
import MapContainer from '../components/MapContainter';
import TourComponent from "./tour";
import TourDetailComponent from "../components/tourDetail";

const Main = ({ history }) => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/login' component={Login} />
        <Route path='/map' component={MapContainer} />
        <Route path="/tours" component={TourComponent} />
        <Route path="/tour/:tour" component={TourDetailComponent} />
      </Switch>
    </main>
  )
}

export default Main;
