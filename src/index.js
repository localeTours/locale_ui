import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Authenticated from './isAuthenticated';

ReactDOM.render(
  <Authenticated />

  , document.getElementById('root'));
registerServiceWorker();
