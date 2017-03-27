/* global process */

import React from 'react';

import authentication from 'modules/authentication';
import DevTools from 'lib/components/devTools';
import Routes from './Routes';


const App = () => (
  <div>
    <authentication.TokenWatchdog />
    {process.env.NODE_ENV === 'production' ? null : <DevTools />}
    <Routes />
  </div>
  );

export default App;
