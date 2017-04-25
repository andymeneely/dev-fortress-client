import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import TeamSidebar from './TeamSidebar';

import { teamDevCaps } from '../../selectors';

const ConnectedTeamSidebar = connect(
  () => createStructuredSelector({
    startingDevCaps: teamDevCaps,
    spentDevCaps: () => 0,
  }),
  () => ({})
)(TeamSidebar);

export default ConnectedTeamSidebar;
