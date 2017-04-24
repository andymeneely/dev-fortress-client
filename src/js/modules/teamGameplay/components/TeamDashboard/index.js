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
  currentRound
} from '../../selectors';
import {
  requestTeamInfo,
  requestGameInfo,
  requestTeamTypes
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
  }),
  dispatch => ({
    loadTeamInfo: tId => dispatch(requestTeamInfo(tId)),
    loadGameInfo: gId => dispatch(requestGameInfo(gId)),
    loadTeamTypes: () => dispatch(requestTeamTypes()),
  })
)(TeamDashboard);

export default ConnectedTeamDashboard;
