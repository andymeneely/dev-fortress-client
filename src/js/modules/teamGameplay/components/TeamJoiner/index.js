import { connect } from 'react-redux';
import AuthModules from 'modules/authentication';
import TeamJoiner from './TeamJoiner';

const ConnectedTeamJoiner = connect(
  () => ({}),
  dispatch => ({
    authenticateTeam: tCode => dispatch(AuthModules.actions.requestLoginTeam(tCode)),
  })
)(TeamJoiner);

export default ConnectedTeamJoiner;
