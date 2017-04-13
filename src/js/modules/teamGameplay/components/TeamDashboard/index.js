import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import AuthModule from 'modules/authentication';
import TeamDashboard from './TeamDashboard';
import { teamName } from '../../selectors';
import { requestTeamInfo } from '../../actions';

const ConnectedTeamDashboard = connect(
  createStructuredSelector({
    teamId: AuthModule.selectors.teamIdSelector,
    teamName,
  }),
  dispatch => ({
    loadTeamInfo: tId => dispatch(requestTeamInfo(tId)),
  })
)(TeamDashboard);

export default ConnectedTeamDashboard;
