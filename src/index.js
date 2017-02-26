/**
 * Root entry file
 *
 * This file instantiates the root React component and
 * mounts it to the DOM
 */

// import styles
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Store from './js/store';
import App from './js/app';

import './css/main.scss';

/**
 * Main application entry point
 */

const appProps = {
  // set app props
};

ReactDOM.render(
  React.createElement(
      Provider,
      { store: Store },
      React.createElement(App, appProps)
  ),
  document.getElementById('app-container')
);

