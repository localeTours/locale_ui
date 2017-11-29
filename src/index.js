import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  ConnectedRouter as Router,
  routerMiddleware,
  syncHistoryWithStore } from 'react-router-redux';

import reducers from './reducers';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Authenticated from './isAuthenticated';

let initialState = {};
let history = createHistory();
const rMiddleware = routerMiddleware(history);
let store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk, rMiddleware)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Authenticated />
    </BrowserRouter>
  </Provider>

  , document.getElementById('root'));
registerServiceWorker();


