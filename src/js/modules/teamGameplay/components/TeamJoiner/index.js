import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import AuthModule from 'modules/authentication';
import TeamJoiner from './TeamJoiner';
import { requestTeamInfo } from '../../actions';
import { teamDataLoaded } from '../../selectors';

const ConnectedTeamJoiner = connect(
  createStructuredSelector({
    teamId: AuthModule.selectors.teamIdSelector,
    teamDataLoaded,
  }),
  dispatch => ({
    authenticateTeam: tCode => dispatch(AuthModule.actions.requestLoginTeam(tCode)),
    loadTeamInfo: tId => dispatch(requestTeamInfo(tId)),
  })
)(TeamJoiner);

export default ConnectedTeamJoiner;
