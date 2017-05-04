import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import AuthModule from 'modules/authentication';
import TeamDashboard from './TeamDashboard';
import { teamName, socketAuthed } from '../../selectors';
import { requestTeamInfo, tryAuthTeamSocket } from '../../actions';

const ConnectedTeamDashboard = connect(
  createStructuredSelector({
    teamId: AuthModule.selectors.teamIdSelector,
    teamName,
    socketAuthenticated,
  }),
  dispatch => ({
    loadTeamInfo: tId => dispatch(requestTeamInfo(tId)),
    authTeamSocket: () => dispatch(tryAuthTeamSocket()),
  })
)(TeamDashboard);

export default ConnectedTeamDashboard;
