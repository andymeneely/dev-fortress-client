import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import AuthModule from 'modules/authentication';
import TeamJoiner from './TeamJoiner';

const ConnectedTeamJoiner = connect(
  createStructuredSelector({
    teamId: AuthModule.selectors.teamIdSelector,
  }),
  dispatch => ({
    authenticateTeam: tCode => dispatch(AuthModule.actions.requestLoginTeam(tCode)),
  })
)(TeamJoiner);

export default ConnectedTeamJoiner;
