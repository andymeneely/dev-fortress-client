import React from 'react';
import { syncHistoryWithStore } from 'react-router-redux';
import {
  Router,
  Route,
  browserHistory,
  IndexRoute
} from 'react-router';

import {
  composeHooks,
  redirectIfLoggedIn,
  isAuthenticated,
  isProfessor,
} from 'lib/routerHooks';
import Home from 'lib/components/connectedHome';
import NavigationFrame from 'lib/components/navigationFrame';

import authentication from 'modules/authentication';
import adminModule from 'modules/admin';
import professorModule from 'modules/professor';

import Store from '../store';

const history = syncHistoryWithStore(browserHistory, Store);

const Routes = (props) => {
  if (props.isInitialized) {
    return (
      <Router history={history}>
        <Route path="/" component={NavigationFrame}>
          <IndexRoute component={Home} />
          <Route
            path="login"
            component={authentication.LoginView}
            onEnter={redirectIfLoggedIn}
          />
          <Route
            path="admin"
            component={adminModule.AdminView}
            onEnter={isAuthenticated}
          />
          <Route
            path="professor"
            onEnter={composeHooks(isAuthenticated, isProfessor)}
          >
            <IndexRoute component={professorModule.ProfessorView} />
            <Route
              path="createGame"
              component={professorModule.GameCreation}
              onEnter={isAuthenticated}
            />
          </Route>
        </Route>
      </Router>
    );
  }
  return (<div>Loading...</div>);
};

Routes.propTypes = {
  isInitialized: React.PropTypes.bool.isRequired,
};

export default Routes;
