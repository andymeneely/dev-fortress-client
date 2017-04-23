import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import AuthModule from 'modules/authentication';
import TeamDashboard from './TeamDashboard';
import {
  teamName,
  gameName,
  teamGameId
} from '../../selectors';
import { requestTeamInfo, requestGameInfo } from '../../actions';

const ConnectedTeamDashboard = connect(
  createStructuredSelector({
    teamId: AuthModule.selectors.teamIdSelector,
    teamName,
    gameName,
    gameId: teamGameId,
  }),
  dispatch => ({
    loadTeamInfo: tId => dispatch(requestTeamInfo(tId)),
    loadGameInfo: gId => dispatch(requestGameInfo(gId)),
  })
)(TeamDashboard);

export default ConnectedTeamDashboard;
