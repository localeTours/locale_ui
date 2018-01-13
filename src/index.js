import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss';
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss';

// Containers
import Full from './containers/Full/';

// Views
import Login from './frontend/views/Pages/Login/';
import Register from './frontend/views/Pages/Register/';
import Page404 from './frontend/views/Pages/Page404/';
import Page500 from './frontend/views/Pages/Page500/';
import CreateTour from './frontend/components/createTour';
import TourDetailComponent from "./frontend/components/tourDetail";

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './frontend/reducers';
const rMiddleware = routerMiddleware(history);
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
    ConnectedRouter as Router,
    routerMiddleware,
    syncHistoryWithStore } from 'react-router-redux';

let store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk, rMiddleware)));





ReactDOM.render((
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login}/>
          <Route exact path="/register" name="Register Page" component={Register}/>
          <Route exact path="/createTour" name="Create Tour" component={CreateTour} />
          <Route exact path="/tour/:tour" name="Tour" component={TourDetailComponent} />
          <Route exact path="/404" name="Page 404" component={Page404}/>
          <Route exact path="/500" name="Page 500" component={Page500}/>
          <Route path="/" name="Home" component={Full}/>
        </Switch>
      </HashRouter>
    </Provider>
), document.getElementById('root'));
