import React from 'react';
import { syncHistoryWithStore } from 'react-router-redux';
import {
  Router,
  Route,
  browserHistory,
  IndexRoute,
  IndexRedirect
} from 'react-router';

import {
  composeHooks,
  redirectIfLoggedIn,
  isAuthenticated,
  isProfessor,
  isUser,
  isTeam,
  isAdmin
} from 'lib/routerHooks';
import Home from 'lib/components/connectedHome';
import NavigationFrame from 'lib/components/navigationFrame';

import authentication from 'modules/authentication';
import adminModule from 'modules/admin';
import professorModule from 'modules/professor';
import teamGameplay from 'modules/teamGameplay';

import Store from '../store';

const history = syncHistoryWithStore(browserHistory, Store);

const Routes = (props) => {
  if (props.isInitialized) {
    return (
      <Router history={history}>
        <Route path="play" >
          <IndexRedirect to="/game" />
          <Route path=":teamCode" component={teamGameplay.components.TeamJoiner} />
        </Route>
        <Route path="game" onEnter={composeHooks(isTeam)}>
          <IndexRoute component={teamGameplay.components.TeamDashboard} />
        </Route>
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
            onEnter={composeHooks(isAuthenticated, isAdmin, composeHooks)}
          />
          <Route
            path="professor"
            onEnter={composeHooks(isAuthenticated, isUser, isProfessor)}
          >
            <IndexRoute component={professorModule.ProfessorView} />
            <Route
              path="createGame"
              component={professorModule.GameCreation}
            />
            <Route
              path="game/:gameId"
              component={professorModule.GameDetailView}
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
