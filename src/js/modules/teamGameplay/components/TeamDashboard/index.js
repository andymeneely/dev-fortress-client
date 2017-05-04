import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import AuthModule from 'modules/authentication';
import TeamDashboard from './TeamDashboard';
import {
  teamName,
  gameName,
  teamGameId,
  teamTypeName,
  teamDevCaps,
  teamMindset,
  currentRound,
  actionsIndex,
  selectedActions,
  pastActions,
  spentDevcaps,
  socketAuthenticated
} from '../../selectors';

import {
  requestTeamInfo,
  requestGameInfo,
  requestTeamTypes,
  requestActions,
  tryAuthTeamSocket
} from '../../actions';

const ConnectedTeamDashboard = connect(
  createStructuredSelector({
    teamId: AuthModule.selectors.teamIdSelector,
    teamName,
    gameName,
    gameId: teamGameId,
    teamTypeName,
    teamDevCaps,
    teamMindset,
    currentRound,
    actionsIndex,
    selectedActions,
    pastActions,
    spentDevcaps,
    socketAuthenticated,
  }),
  dispatch => ({
    loadTeamInfo: tId => dispatch(requestTeamInfo(tId)),
    loadGameInfo: gId => dispatch(requestGameInfo(gId)),
    loadTeamTypes: () => dispatch(requestTeamTypes()),
    loadActions: () => dispatch(requestActions()),
    authTeamSocket: () => dispatch(tryAuthTeamSocket()),
  })
)(TeamDashboard);

export default ConnectedTeamDashboard;
